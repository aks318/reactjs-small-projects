import React, { useEffect, useState } from 'react'

function BoxSearch() {

    const [search , setSearch] = useState('')
    var arrColor = ['red' , 'black','red' , 'black','blue' ,'brown' ,'white', 'pink', 'white']
    const [arrCopy , setArr] = useState(arrColor)
    const styleObj = {
        width : '200px',
        height : '200px',
        border : '1px solid black',
        margin : '5px'

    }

    useEffect (() =>{
        setArr(arrColor.filter(val => val.startsWith(search)))
    } , [search])
    return (
        <>
        <input type = "text" placeholder = "Seach..." onChange = {(e) => setSearch(e.target.value)}></input>
        <div style = {{display : 'flex'}}>
            {arrCopy.map((color , index) =>{
                return(
                    <div key = {index} style = {{...styleObj , backgroundColor : `${color}`}}>

                    </div>
                )
            })}
        </div>
        </>
    )
}

export default BoxSearch
