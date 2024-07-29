"use client";
import React, { useTransition } from "react";
import { resetTodo } from "../_actions/todo-action";

type Props = {};

export default function TodoReset({}: Props) {
  const [_, startTransition] = useTransition();

  return (
    <button
      onClick={() => {
        startTransition(() => resetTodo());
      }}
      className="bg-red-500 text-white rounded-md py-3 font-bold my-3"
    >
      Reset
    </button>
  );
}
