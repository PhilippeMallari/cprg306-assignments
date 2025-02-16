"use client"

import { useState, useEffect, use } from "react"

export default function Page() {

    const [randomDogUrl, setRandomDogUrl] = useState(null);
    const [allDogBreedsUrl, setAllDogBreedsUrl] = useState([]);
    const [loading, setLoading] = useState(true)
    const [selectedBreed, setSelectedBreed] = useState("")

    const getRandomDog =  async (breed) => {
        try {
            const response = breed ? await fetch(`https://dog.ceo/api/breed/${breed}/images/random`) : await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await response.json();
            const url = data.message
            setRandomDogUrl(url)
        } catch (error) { 
            console.error("Error fetching:", error);
        } finally {
            setLoading(false);
        }
    }

    const getAllBreeds = async () => {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/list/all");
            const data = await response.json();
            const breeds = Object.keys(data.message)
            setAllDogBreedsUrl(breeds)
        } catch (error) {
            console.error("Error fetching:", error);
        } finally {
            setLoading(false)
        }
    }

    const handleBreedChange = (event) => {
        setSelectedBreed(event.target.value)
    }

    useEffect(() => {
        getRandomDog();
        getAllBreeds();
    }, [])

    useEffect(() => {
        if (selectedBreed === '') return;
        getRandomDog(selectedBreed);
    }, [selectedBreed])

    return (
        <>
            <h2 className="text-white">Hello from week 8</h2>
            <img src={randomDogUrl} />
            { loading ? <p>loading...</p> :
            <div>
                <select onChange={handleBreedChange}>
                    {
                        allDogBreedsUrl.map((breed) => (
                            <option key={breed} value={breed} className="text-white">
                                {breed}
                            </option>
                        ))
                    }
                </select>
            </div>
            }
        </>
    )
}