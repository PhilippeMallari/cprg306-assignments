"use client"

import React, { useState } from 'react';

export default function GroceryForm ({ addItem }) {

  const [name, setName] = useState("");
  const [count, setCount] = useState(1)
  const [category, setCategory] = useState("Produce")

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  function selectChangeHandler() {
    setCategory(event.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const newId = Math.floor(Math.random() * 1000000)
    const newItem = { id: newId, name, count, category }
    addItem(newItem)
    console.log('This is the new item: ', newItem)
    setName("")
    setCount(0)
    setCategory("Produce")
}


  return (
    <form onSubmit={submitHandler}>
      <div className="p-4 max-w-xl mx-auto">        
        <div className="mb-4">
          <label className="text-white">Item name</label>
          <input 
            type="text" 
            className="w-full p-2 border rounded mt-1"
            placeholder="Item name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className='text-white'>Count: {count}</div>
        
        <div className="flex gap-2 mt-2">
          <button
          type="button"
            onClick={increment}
            disabled={count > 19}
            className="px-4 py-2  disabled:bg-gray-900 bg-blue-500 rounded hover:bg-blue-600"
          >
            +
          </button>
          
          <button
          type="button"
            onClick={decrement}
            className="px-4 py-2 disabled:bg-gray-900 bg-red-500 rounded hover:bg-gray-600"
            disabled={count === 1}
          >
            -
          </button>
          <label className='text-white' htmlFor="options">Choose an option: </label>
          <select id="options" className='text-black' value={category}
          onChange={selectChangeHandler}
          >
              <option value="">--Please choose an option--</option>
              <option value="Produce">Produce</option>
              <option value="Dairy">Dairy</option>
              <option value="Bakery">Bakery</option>
              <option value="Meat">Meat</option>
              <option value="Frozen Foods">Frozen Foods</option>
              <option value="Canned Goods">Canned Goods</option>
              <option value="Dry Goods">Dry Goods</option>
              <option value="Beverages">Beverages</option>
              <option value="Snacks">Snacks</option>
              <option value="Household">Household</option>
              <option value="Other">Other</option>
          </select>
          <button type="submit" className='bg-blue-600 rounded-lg p-2'>Add to grocery</button>
        </div>
      </div>
    </form>
  );
};