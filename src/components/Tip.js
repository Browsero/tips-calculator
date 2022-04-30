import React, { useState, useContext } from "react";
import Title from "./Title";
import { DataContext } from "../store/data-context";

export default function Tip() {
  const [currentActive, setCurrentActive] = useState(null);
  const { state, dispatch } = useContext(DataContext);

  const [customTip, setCustomTip] = useState("");

  const buttonClass =
    "bg-dark-grayish-cyan p-2 rounded-lg text-center text-xl font-bold text-very-light-grayish-cyan transition md:hover:scale-105 ";
  const activeButton = buttonClass + "bg-cyan";

  const clickHandle = (event) => {
    const current = event.target;
    setCurrentActive((prev) => {
      if (prev != null) {
        prev.className = buttonClass;
      }
      setCurrentActive(current);
      current.className = activeButton;
    });
    dispatch({ type: "updateTipAmount", amount: +event.target.value / 100 });
  };

  return (
    <>
      <Title class="font-bold text-xl text-very-dark-cyan">Select Tip %</Title>
      <div className="grid grid-cols-2 gap-4">
        <button
          id="button-1"
          onClick={clickHandle}
          className={buttonClass}
          value={5}
        >
          5%
        </button>
        <button
          id="button-2"
          onClick={clickHandle}
          className={buttonClass}
          value={10}
        >
          10%
        </button>
        <button
          id="button-3"
          onClick={clickHandle}
          className={buttonClass}
          value={15}
        >
          15%
        </button>
        <button
          id="button-4"
          onClick={clickHandle}
          className={buttonClass}
          value={25}
        >
          25%
        </button>
        <button
          id="button-5"
          onClick={clickHandle}
          className={buttonClass}
          value={50}
        >
          50%
        </button>
        <button className="bg-very-light-grayish-cyan p-2 rounded-lg relative">
          <input
            className="w-full bg-transparent text-center text-xl font-bold text-very-dark-cyan focus:outline-0"
            type="text"
            inputMode="numeric"
            placeholder="CUSTOM"
            value={customTip}
            onChange={(event) => setCustomTip(event.target.value)}
            onBlur={(event) => {
              dispatch({
                type: "updateTipAmount",
                amount: +event.target.value / 100,
              });
            }}
          />
        </button>
      </div>
    </>
  );
}
