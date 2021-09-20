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
        setArr(arrColor.filter(val => val.startsWith(search.toLowerCase())))
    } , [search])
    return (
        <>
        <input type = "text" placeholder = "Seach..." onChange = {(e) => setSearch(e.target.value)}></input>
        <div style = {{display : 'flex'}} data-testid="test-id">
            {arrCopy.map((color , index) =>{
                return(
                    <div key = {index} style = {{...styleObj , backgroundColor : `${color}`}} data-testid="child-test-id">

                    </div>
                )
            })}
        </div>
        </>
    )
}

export default BoxSearch
