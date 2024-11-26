// *In page.js, create a functional component named Page that returns a main element wrapped around an h1 "Shopping List" header and the ItemList component. Use Tailwind classes for styling.

import ItemList from "./item-list"

export default function Page() {
    return (
        <main className="bg-slate-950">
            <h2 className="text-3xl font-bold m-2">
                Shopping List
            </h2>
            <ItemList />
        </main>
    )
}