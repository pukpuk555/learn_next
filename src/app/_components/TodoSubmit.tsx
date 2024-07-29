import React from "react";
import { useFormStatus } from "react-dom";

type Props = {};

export default function TodoSubmit({}: Props) {
  const { pending } = useFormStatus();
  return (
    <button className="bg-black text-white rounded-md py-3 font-bold">
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}
