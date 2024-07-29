"use server";
import { revalidatePath } from "next/cache";

export const submitTodo = async (prevState: any, formData: FormData) => {
  "use server";
  const message = formData.get("message");

  if (!message) {
    console.log("no message");
    return { error: "no message" };
  }

  await fetch("http://localhost:3000/api/todo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  revalidatePath("/");
  return { error: null };
};

export const resetTodo = async () => {
  await fetch("http://localhost:3000/api/todo", {
    method: "DELETE",
  });
  revalidatePath("/");
  return { error: null };
};
