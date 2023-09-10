"use client";

import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

import { db } from "../../firebase.config";
import { ItemType } from "../types";

const NewExpenseInput = () => {
  const [item, setItem] = useState({ name: "", amount: "" });
  const inputRef = useRef<HTMLInputElement>(null);

  function capitalizeFirstLetter(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  function onSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const amount = parseInt(item.amount);

    if (Number.isNaN(amount) || amount <= 0 || !item.name.trim()) {
      return;
    }

    const itemToBeSaved: Omit<ItemType, "id"> = {
      name: capitalizeFirstLetter(item.name),
      amount: amount,
      date: Timestamp.fromDate(new Date()),
    };

    addItem(itemToBeSaved);
    setItem({ name: "", amount: "" });
    inputRef.current?.focus();
  }

  const addItem = async (item: Omit<ItemType, "id">) => {
    try {
      const docRef = await addDoc(collection(db, "items"), item);
      //   console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form onSubmit={onSubmitForm} className="flex gap-2 mb-10">
      <input
        ref={inputRef}
        className="w-6/12 input"
        placeholder="Item name"
        value={item.name}
        autoFocus
        onChange={(e) => setItem({ ...item, name: e.target.value })}
      ></input>
      <input
        className="w-4/12 input"
        placeholder="Amount:$"
        type="number"
        pattern="[0-9]*"
        value={item.amount}
        onChange={(e) => setItem({ ...item, amount: e.target.value })}
      ></input>
      <motion.button
        whileTap={{ scale: 1.03 }}
        type="submit"
        className="w-2/12 bg-gray-900 button p-2 border border-gray-700"
      >
        +
      </motion.button>
    </form>
  );
};

export default NewExpenseInput;
