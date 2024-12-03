"use client";

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <>
            <h2>Hello from the counter component</h2>
            <div>
                <h3>Count: {count}</h3>
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={increment}
            >
                Click me to increment
            </button>
            <button
                className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={decrement}
                disabled={count === 0} // Disable button if count is 0
            >
                Click me to decrement
            </button>
        </>
    );
}
