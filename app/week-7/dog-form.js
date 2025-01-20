"use client"

import { useState } from "react"

export default function DogForm({ addDog }) {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();
        const newId = Math.floor(Math.random() * 1000000)
        const newDog = { id: newId, name, age }
        addDog(newDog)
        console.log('This is the new dog: ', newDog)
        setName("")
        setAge(0)
    }

    return (
        <div>
            <h2 className="text-2xl text-white">Add Dog</h2>
            <form onSubmit={handleSubmit}>
                <div className="text-white">
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="text-black"
                    />
                </div>
                <div className="text-white">
                    <label htmlFor="age">Age:</label>
                    <input 
                        type="number"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(parseInt(e.target.value))}
                        className="text-black"
                    />
                </div>
                <button className="text-white bg-green-500 rounded-lg p-1 mt-3" type="submit">Add Dog</button>
            </form>
        </div>
    )
}