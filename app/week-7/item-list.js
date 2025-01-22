"use client"

import Item from "./item";

export default function ItemList({ items, onSortByName, onSortByCategory }) {
    
    function groupedClickHandler() {
        alert("You have clicked the group click handler.")
    }

      return (
        <>
            <div className="p-4 max-w-xl mx-auto">
                <label htmlFor="sort" className="text-white">Sort by: </label>
                    <button className="bg-orange-700 p-1 m-2 w-28" onClick={onSortByName}>Name</button>
                    <button className="bg-orange-500 p-1 m-2 w-28" onClick={onSortByCategory}>Category</button>
                    <button className="bg-orange-700 p-1 m-2 w-28" onClick={() => groupedClickHandler()}>Grouped Category</button>
                    </div>
            {
                items.map((item) => (
                    <Item key={item.id} name={item.name} count={item.count} category={item.category} />  
                ))
            }
        </>
      )
}
