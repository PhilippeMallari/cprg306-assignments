"use client";

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(1);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <main className="flex justify-center w-full">
            <div className="bg-white text-black">
                <h2>Hello from the counter component</h2>
                <div>
                    <h3>Count: {count}</h3>
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 disabled:bg-gray-400 disabled:cursor-not-allowed rounded"
                    onClick={increment}
                    disabled={count > 19}
                >
                    Click me to increment
                </button>
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 disabled:bg-gray-400 disabled:cursor-not-allowed rounded"
                    onClick={decrement}
                    disabled={count === 1}
                >
                    Click me to decrement
                </button>
            </div>
        </main>
    );
}
