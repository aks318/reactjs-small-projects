import React, { useState } from 'react'
import "./Stopwatch.css"

export default function Stopwatch() {
    var [time , setTime] = useState({ms : 0 , s : 0 , m : 0})
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

    var updatems = time.ms, updates = time.s , updatem = time.m

    const starttimer = () =>{
        
        if (updates === 60){
            updatem++
            updates = 0
        }

        if(updatems === 99){
            updates++
            updatems = 0
        }

        updatems++
        return setTime({ms : updatems, s : updates, m : updatem})
        
    }

    const resetTime = () =>{
        setTime({ms : 0 , s : 0 , m : 0})
    }

    return (
            <div className="wrapper">
                <h1>Stopwatch</h1>
                <h2>ReactJS Stopwatch</h2>
                <p><span id="seconds">{time.m >= 10 ? time.n : "0" + time.m}</span>:<span id="seconds">{time.s >= 10 ? time.s : "0" + time.s}</span>:<span id="tens">{time.ms >= 10 ? time.ms : "0" + time.ms}</span></p>
                {timeOn ? <button onClick = {startTime}>Start</button> : <button onClick = {stopTime}>Stop</button>}
                <button onClick = {resetTime}>Reset</button>
            </div> 
    
    )
}
