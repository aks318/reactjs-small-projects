import React, { useState } from 'react'
import "./Stopwatch.css"

export default function Stopwatch() {
    var [mscount , setmsCount] = useState(0)
    var [scount , setsCount] = useState(0)
    var [timeOn , settimeOn] = useState(true)

    const [Interval , setInt] = useState()

    const startTime = () => {
        settimeOn(timeOn = !timeOn)
        setInt(setInterval(starttimer , 10))
    }

    const stopTime = () => {
        settimeOn(timeOn = !timeOn)
        clearInterval(Interval) 
    }

    const starttimer = () =>{
        setmsCount(mscount = mscount + 1)
        
        if (mscount >= 99){
            setsCount(scount = scount + 1)
            setmsCount(mscount = 0)
        }
        
    }

    const resetTime = () =>{
        setmsCount(0)
        setsCount(0)
    }

    return (
            <div className="wrapper">
                <h1>Stopwatch</h1>
                <h2>ReactJS Stopwatch</h2>
                <p><span id="seconds">{scount >= 10 ? scount : "0" + scount}</span>:<span id="tens">{mscount >= 10 ? mscount : "0" + mscount}</span></p>
                {timeOn ? <button onClick = {startTime}>Start</button> : <button onClick = {stopTime}>Stop</button>}
                <button onClick = {resetTime}>Reset</button>
            </div> 
    
    )
}
