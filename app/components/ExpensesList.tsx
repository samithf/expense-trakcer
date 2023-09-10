"use client";

import React, { useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { motion, LayoutGroup } from "framer-motion";
import { collection, DocumentData, getDocs, onSnapshot, orderBy, query, Timestamp } from "firebase/firestore";
import { db } from "@/firebase.config";

const ExpensesList = ({ setTotal }) => {
  const [itemList, setItemList] = useState([]);
  const [itemsLoading, setItemsLoading] = useState(true);

  useEffect(() => {
    const itemsRef = collection(db, "items");
    const q = query(itemsRef, orderBy("date", "desc"));

    const unsub = onSnapshot(q, (snapshots) => {
      const docs: any = [];
      snapshots.forEach((doc: any) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItemList(docs);
      setTotal(docs.reduce((acc: number, curr: DocumentData) => acc + curr.amount, 0));
      setItemsLoading(false);
    });

    return unsub;
  }, [setTotal]);

  if (itemsLoading) {
    return <h2 className="text-center text-sm">Loading...</h2>;
  }

  if (!itemsLoading && itemList.length === 0) {
    return <h2 className="text-center text-sm">No itmes found</h2>;
  }

  return (
    <ul className="space-y-3">
      <LayoutGroup>
        {itemList.map((expense) => {
          return <ExpenseItem item={expense} key={expense.id} />;
        })}
      </LayoutGroup>
    </ul>
  );
};

export default ExpensesList;
