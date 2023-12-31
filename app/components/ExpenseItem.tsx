import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase.config";
import { motion } from "framer-motion";
import { ItemType } from "../types";

const ExpenseItem = ({ item }: { item: ItemType }) => {
  const deleteItem = async (id: string) => {
    await deleteDoc(doc(db, "items", id));
  };

  return (
    <motion.li
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.02 }}
      className="flex gap-2 bg-gray-900 p-3 select-none"
    >
      <span className="w-6/12">{item.name}</span>
      <span className="w-4/12 text-right">${item.amount}</span>
      <span className="w-2/12 text-right cursor-pointer hover:text-red-700" onClick={() => deleteItem(item.id)}>
        x
      </span>
    </motion.li>
  );
};

export default ExpenseItem;
