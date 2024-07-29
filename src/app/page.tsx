import React, { useRef } from "react";
import TodoForm from "./_components/TodoForm";

type Props = {};

export default async function Index({}: Props) {
  const result = await fetch("http://localhost:3000/api/todo");
  const todoList: { id: string; message: string }[] = await result.json();

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">To do List</h1>
      <TodoForm />
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>Task : {todo.message}</li>
        ))}
      </ul>
    </div>
  );
}
