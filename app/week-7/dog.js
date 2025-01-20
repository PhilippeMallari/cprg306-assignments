export default function Dog({ id, name, age, onDelete }) {
    return (
        <div>
            <p>
                {name} is {age} years old
            <button onClick={() => onDelete(id)} className="text-white bg-red-500 rounded-lg p-1 mb-3 ml-2">Delete Dog</button>
            </p>
        </div>
    )
}