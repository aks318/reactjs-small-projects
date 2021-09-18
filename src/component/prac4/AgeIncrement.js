import React, { useState } from 'react'

const AgeIncrement = () => {
    const [age , setAge] = useState(0)

    const incrementAge = () => {
        setAge(age + 1)
    }
 
    return (
        <div>
            <button onClick = {incrementAge}>Increment Age</button>
            <h2>{age}</h2>
        </div>
    )
}

export default AgeIncrement
