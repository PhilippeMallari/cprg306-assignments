"use client";

import DogList from "./dog-list";
import DogForm from "./dog-form";
import dogsJson from "./dog-data.json"
import { useState } from "react";

export default function Page() {

    const [dogs, setDogs] = useState(dogsJson)

    const handleAddDog = (newDog) => {
        setDogs([...dogs, newDog])
    }

    const handleDeleteDog = (id) => {
        // let newDogs = [...dogs]
        // newDogs = newDogs.filter(id => id !== deletedId);
        // console.log('You deleted this dog.', newDogs)

        const updatedDogs = dogs.filter((dog) => dog.id !== id)
        setDogs(updatedDogs)
    }

    return (
        <div>
            <h1 className="text-white">Week 7</h1>
            <DogForm addDog={handleAddDog} />
            <DogList dogs={dogs} deleteDog={handleDeleteDog} />
        </div>
    )
}