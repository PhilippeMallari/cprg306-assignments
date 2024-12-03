"use client";

import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0)

  const [isEnabled, setisEnabled] = useState(false)
  
  // TODO: Create a new state variable called 'isEnabled' with an initial value of false.
  // This variable will be used to control the enabled/disabled state of the increment button.

  const increment = () => {
    setCount(count + 1);
  }

  const toggleEnabled = () => {
    // TODO: Implement a function that toggles the value of 'isEnabled'.
    // If 'isEnabled' is currently true, it should be set to false, and vice versa.
    if (isEnabled == true) {
        setisEnabled(false)
    } else {
        setisEnabled(true)
    }
  }
  
  return (
    <div>
      <button onClick={increment} disabled={!isEnabled} className="bg-blue-400 hover:bg-blue-900 disabled:bg-yellow-900 rounded m-4 p-4">+1</button>
      <input type="checkbox" onChange={toggleEnabled}/>
      Enable button
      <p>Current count: {count}</p>
    </div>
  )
}
