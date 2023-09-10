"use client";
import React from "react";
import ExpensesList from "./ExpensesList";
import NewExpenseInput from "./NewExpenseInput";
import TotalExpenses from "./TotalExpenses";

const ExpenseTracker = () => {
  const [total, setTotal] = React.useState(0);
  return (
    <div>
      <h1 className="font-sembold text-2xl text-center my-10">Expenses Tracker</h1>
      <section className="p-5 bg-gray-800 ">
        <NewExpenseInput />
        <ExpensesList setTotal={setTotal} />
        <TotalExpenses total={total} />
      </section>
    </div>
  );
};

export default ExpenseTracker;
