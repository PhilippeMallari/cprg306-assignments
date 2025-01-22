"use client";

import { useState } from "react";

import GroceryForm from "./grocery-form"
import ItemList from "./item-list"
import itemsJson from "./items.json"

export default function Page() {
    const [items, setItems] = useState(itemsJson)

    const handleAddItem = (newItem) => {
        setItems([...items, newItem])
    }

      // Sorting function passed down to the child
    const sortItemsByName = () => {
        const sortedByName = [...items].sort((a, b) => a.name.localeCompare(b.name));
        setItems(sortedByName); // Update state in the parent
    };

    // Sorting function passed down to the child
    const sortItemByCategory = () => {
        const sortedByCategory = [...items].sort((a, b) => a.category.localeCompare(b.category));
        setItems(sortedByCategory); // Update state in the parent
    };

    return (
        <div>
            <GroceryForm addItem={handleAddItem} />
            <ItemList items={items} onSortByName={sortItemsByName} onSortByCategory={sortItemByCategory} />
        </div>
    )
}