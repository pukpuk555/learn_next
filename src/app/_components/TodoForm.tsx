"use client";
import React, { useRef } from "react";
import { submitTodo } from "../_actions/todo-action";
import { useFormState } from "react-dom";
import TodoSubmit from "./TodoSubmit";
import TodoReset from "./TodoReset";

type Props = {};

export default function TodoForm({}: Props) {
  const ref = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(submitTodo, { error: null });

  return (
    <form
      ref={ref}
      action={async (formData: FormData) => {
        ref.current?.reset();
        formAction(formData);
      }}
      className="flex flex-col w-[300px] my-3"
    >
      <input
        type="text"
        name="message"
        className="px-4 py-2 mb-3 border-black border rounded-md"
        placeholder="Write your job"
      />
      <TodoSubmit />
      <TodoReset />
    </form>
  );
}
