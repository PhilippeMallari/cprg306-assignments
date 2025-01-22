export default function Item({ name, count, category}) {
    return(
        <>
        <ul className="max-w-xl mx-auto">
            <li className="p-2 m-4 bg-slate-900 max-w-sm">
                <h1 className="text-xl text-white font-bold">
                    {name}
                </h1>
                <h2 className="text-white">
                    buy {count} in                     {category}
                </h2>
            </li>
        </ul>
        </>
    )
}