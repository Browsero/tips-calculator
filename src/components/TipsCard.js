import React, { useContext, useState } from "react";
import Input from "./Input";
import Tip from "./Tip";
import Summary from "./Summary";
import { DataContext } from "../store/data-context";

export default function TipsCard() {
  const { state, dispatch } = useContext(DataContext);
  const [bill, setBill] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  return (
    <div className="bg-white flex flex-col w-full rounded-lg p-4 gap-4">
      <Input
        title="Bill"
        icon={process.env.PUBLIC_URL + "/icon-dollar.svg"}
        attributes={{
          type: "text",
          inputMode: "decimal",
          maxLength: 16,
          placeholder: "$0.00",
          value: bill
        }}
        onChange={(event) => {
          setBill(event.target.value.replace(",","."));
        }}
        onBlur={(event) => {
          dispatch({ type: "updateBill", amount: +event.target.value });
        }}
      />
      <Tip />
      <Input
        title="Number of People"
        icon={process.env.PUBLIC_URL + "/icon-person.svg"}
        attributes={{
          type: "text",
          inputMode: "numeric",
          maxLength: 16,
          placeholder: "4",
          value: numberOfPeople
        }}
        onChange={(event) => {
          setNumberOfPeople(event.target.value);
          dispatch({ type: "updateNumberOfPeople", amount: +event.target.value });
        }}
      />
      <Summary />
      <p className="mx-auto text-xs font-bold text-grayish-cyan">Hubert Madej | Inspired by Frontend Mentor</p>
    </div>
  );
  
}