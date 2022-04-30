import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../store/data-context";

export default function Summary() {
  const [totalTip, setTotalTip] = useState(0.0);
  const [totalAmount, setTotalAmount] = useState(0.0);

  const { state, dispatch } = useContext(DataContext);

  useEffect(() => {
    if (state.bill > 0 && state.numberOfPeople > 0) {
      const currentTip = +(
        (state.bill / state.numberOfPeople) *
        state.tipAmount
      ).toFixed(2);
      setTotalTip(currentTip);
      setTotalAmount(((state.bill / state.numberOfPeople)+currentTip).toFixed(2));
    }
  }, [state.bill, state.tipAmount, state.numberOfPeople]);
  return (
    <div className="bg-very-dark-cyan flex flex-col gap-4 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-white font-bold">Tip amount</h1>
          <p className="font-bold text-grayish-cyan">/ person</p>
        </div>
        <h1 className="text-4xl text-cyan font-bold">$ {totalTip}</h1>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-white font-bold">Total</h1>
          <p className="font-bold text-grayish-cyan">/ person</p>
        </div>
        <h1 className="text-4xl text-cyan font-bold">$ {totalAmount}</h1>
      </div>
    </div>
  );
}
