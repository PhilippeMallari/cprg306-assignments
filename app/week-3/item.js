// * In item.js, create a functional component named Item. This component should accept name, quantity, and category as props and display them in a list item element. Use Tailwind classes for styling.

export default function Item({ name, quantity, category}) {
    return(
        <>
        <ul>
            <li className="p-2 m-4 bg-slate-900 max-w-sm">
                <h1 className="text-xl font-bold">
                    {name}
                </h1>
                <h2>
                    buy {quantity} in                     {category}
                </h2>
            </li>
        </ul>
        </>
    )
}