import Dog from "./dog.js"

export default function DogList({ dogs, deleteDog }) {

    return (
        <div>
            <ul className="text-white">
                {dogs.map((dog) => (
                <Dog onDelete={deleteDog} key={dog.id} id={dog.id} name={dog.name} age={dog.age} />
                ))}
            </ul>
        </div>
    )
}