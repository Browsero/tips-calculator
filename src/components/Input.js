import React from "react";
import Title from './Title';

export default function Bill(props) {
  return (
    <>
      <Title class="font-bold text-xl text-very-dark-cyan">{props.title}</Title>
      <div className="flex flex-row gap-4 p-2 rounded-lg bg-very-light-grayish-cyan">
        <img
          className="p-2 scale-110"
          alt="$"
          src={props.icon}
        />
        <input
          className="bg-transparent w-full focus:outline-0 text-right text-very-dark-cyan font-bold text-2xl" onBlur={props.onBlur} onChange={props.onChange}
          {...props.attributes}
        />
      </div>
    </>
  );
}
