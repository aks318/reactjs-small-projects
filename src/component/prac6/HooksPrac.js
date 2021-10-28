import React, { useState } from 'react'

const HooksPrac = () => {
    const [count , setCount] = useState(0)

    const incrementBy5 = () =>{
        for (let i=0 ; i<5 ; i++){
            setCount(prev => prev + 1)
        }
    }

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick = {incrementBy5}>Increment Count by 5</button>
        </div>
    )
}

export default HooksPrac
