import React, { useEffect, useMemo, useRef, useState } from 'react'

const AgeIncrement = () => {
    const [age , setAge] = useState(0)
    const [name , setName] = useState('Aakash')
    const inputRef = useRef(null)

    useEffect(() =>{
        inputRef.current.focus()
    } , [])

    const incrementAge = () => {
        setAge(age + 1)
    }

    const changeName = () =>{
        setName('Karma')
    }

    const usememoFunc = useMemo(() => {
        console.log('useMemo')
        let i = 0
        while(i < 10000*100000) i++
        return age % 2 ===0 ? 'Even' : 'Odd'

    } , [name])
 
    return (
        <div>
            <button onClick = {incrementAge}>Increment Age</button>
            <button onClick = {changeName}>Change Name</button>
            <h2>{age}</h2>
            <h2>{usememoFunc}</h2>
            <h4>{name}</h4>
            <input ref = {inputRef}></input>
            
        </div>
    )
}

export default AgeIncrement
