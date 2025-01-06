import CodingDemo from "./coding-demo"
import ItemList from "./item-list"

export default function Page() {
    return (
        <main className="bg-slate-950">
            <h2 className="text-white text-3xl font-bold m-2">
                Shopping List
            </h2>
            <ItemList />
            {/* <CodingDemo /> */}
        </main>
    )
}