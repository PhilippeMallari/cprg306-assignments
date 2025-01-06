"use client";

import { useState } from "react"

import dogsJson from "./dogs.json"
import Image from "next/image"

export default function CodingDemo() 
{

    const [selectedDogId, setSelectedDogId] = useState(-1)

    let dogs = [...dogsJson]

    // *filtering by name alphabetically
    dogs.sort((a, b) => a.name.localeCompare(b.name))

    // *filter by name length
    dogs = dogs.filter((dog) => dog.name.length > 5)

    function dogClickHandler(id) {
        if(selectedDogId === id) {
            setSelectedDogId(-1);
            return;
        }
        setSelectedDogId(id)
    }

    return <>
        <h1 className="text-white">
            <p>Current id: {selectedDogId}</p>
            <ul>
            {dogs.map((dog) => (
                <li key={dog.id} className={`py-2 m-2 ${dog.id === selectedDogId ? "bg-gray-400" : "bg-gray-600"}`} onClick={() => dogClickHandler(dog.id)}>
                    <h1>
                        Dig id: {dog.id}
                    </h1>
                    <h2>
                        Dog name: {dog.name}
                    </h2>
                    <p>
                        Dog description: {dog.description}
                    </p>
                    <p>
                        <Image src={dog.imageUrl} alt={dog.name} width={300} height={300}/>
                    </p>
                </li>
            ))}
            </ul>
        </h1>
    </>
}