import React, { useMemo, useState } from 'react'

const AgeIncrement = () => {
    const [age , setAge] = useState(0)
    const [name , setName] = useState('Aakash')

    const incrementAge = () => {
        setAge(age + 1)
    }

    const usememoFunc = useMemo(() => {
        let i = 0
        while(i < 10000*100000) i++
        return age % 2 ===0 ? 'Even' : 'Odd'

    } , [name])
 
    return (
        <div>
            <button onClick = {incrementAge}>Increment Age</button>
            <h2>{age}</h2>
            <h2>{usememoFunc}</h2>
        </div>
    )
}

export default AgeIncrement
