"use client"

/* 
Demo: Controlled Component
Create a form to add a dog with name, breed, and age
Use the useState hook to manage state of each form control
Use the onChange event handler to update state
Upon submission, create a dog object and display it in the console
Add validation using conditional rendering
*/

import { useState } from "react";

export default function ControlledComponent() {
    const [dogName, setDogName] = useState("default value beybe");
    const [breed, setBreed] = useState("")
    const [age, setAge] = useState(0)
    const [selectedValue, setSelectedValue] = useState("")
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Do something with the form data
      
      const adjustedAge = age + 10;
      
      let dog = {dogName, age, breed, adjustedAge, selectedValue}

      alert(` Your dog name is: ${dogName} + breed is: ${breed} + and age is: ${age} + for pick up? ${selectedValue} and adjusted age is ${adjustedAge}`)

      console.log(dog)
    };

    function selectChangeHandler() {
        setSelectedValue(event.target.value)
    }

    const handleAgeChange = (event) => {
        let age = parseInt(event.target.value)
        if (age < 0 || isNaN(age)) {
            age = 0
        }
        setAge(age)
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Dog name: </label>
        <input
          id="name"
          type="text"
          value={dogName}
          onChange={(event) => setDogName(event.target.value)}
        />

        <label htmlFor="breed">Breed name: </label>
        <input
        id="breed"
        type="text"
        value={breed}
        onChange={(event) => setBreed(event.target.value)}
        />

        <label htmlFor="age">Dog age: </label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={(event) => handleAgeChange(event)}
        />

        <label htmlFor="options">Choose an option: </label>
        <select id="options" className='text-black' value={selectedValue}
        onChange={selectChangeHandler}
        >
            <option value="">--Please choose an option--</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select>

        <p>Your dog name is: {dogName}, and your breed is: {breed}, and the age is: {age} </p>
        <button type="submit">Submit</button>
      </form>
    );
  }