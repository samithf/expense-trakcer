import React from "react";

const TotalExpenses = ({ total }: { total: number }) => {
  return (
    <div className="flex justify-between mt-4">
      <span>Total</span>
      <span>${total}</span>
    </div>
  );
};

export default TotalExpenses;
