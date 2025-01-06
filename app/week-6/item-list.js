// * In item-list.js, create a functional component named ItemList. Inside this component, copy paste the following item objects each with name, quantity, and category properties. Render these items using the Item component you just created, passing item data as props.

"use client"

import { useState } from "react";

import Item from "./item";

import itemsJson from "./items.json"

export default function ItemList() {

  // Initialize items state
  const [items, setItems] = useState([...itemsJson]);

    // Function to handle sorting by name
    const nameClickHandler = () => {
        const sortedByName = [...items].sort((a, b) => a.name.localeCompare(b.name));
        setItems(sortedByName); // Update state with sorted items
    };

    // Function to handle sorting by category
    const categoryClickHandler = () => {
        const sortedByCategory = [...items].sort((a, b) =>
        a.category.localeCompare(b.category)
        );
        setItems(sortedByCategory); // Update state with sorted items
    };

    function groupedClickHandler() {
        alert("You have clicked the group click handler.")
    }

      return (
        <>
            <div>
                <label htmlFor="sort">Sort by: </label>
                    <button className="bg-orange-700 p-1 m-2 w-28" onClick={() => nameClickHandler()}>Name</button>
                    <button className="bg-orange-500 p-1 m-2 w-28" onClick={() => categoryClickHandler()}>Category</button>
                    <button className="bg-orange-700 p-1 m-2 w-28" onClick={() => groupedClickHandler()}>Grouped Category</button>
                    <label className="absolute top-20 left-240  text-gray-600 text-xs italic" htmlFor="group-category">← "Grouped Category" is an optional extra challenge</label>
                    </div>
            {
                items.map((item) => (
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />  
                ))
            }
        </>
      )
}
