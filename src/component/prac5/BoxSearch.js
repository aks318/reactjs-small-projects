import React from 'react'

function BoxSearch() {
    var arrColor = ['red' , 'black','red' , 'black','blue' ,'brown' ,'white', 'pink', 'white']
    const styleObj = {
        width : '200px',
        height : '200px',
        border : '1px solid black',
        margin : '5px'

    }
    return (
        <div style = {{display : 'flex'}}>
            {arrColor.map(color =>{
                return(
                    <div style = {{...styleObj , backgroundColor : `${color}`}}>

                    </div>
                )
            })}
        </div>
    )
}

export default BoxSearch
