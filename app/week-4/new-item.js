"use client";

import { useState } from "react";

export default function NewPage() {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <h1 className="text-2xl font-bold mb-6 text-pink-800">Current Count: {count}</h1>

      <div className="flex gap-4">
        <button
          onClick={decrement}
          disabled={count === 1}
          className={`text-2xl px-6 py-3 rounded ${
            count === 1
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          -
        </button>

        <button
          onClick={increment}
          disabled={count === 20}
          className={`text-2xl px-6 py-3 rounded ${
            count === 20
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          +
        </button>
      </div>
    </main>
  );
}
