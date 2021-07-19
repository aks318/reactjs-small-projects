import React, { useEffect } from 'react'
import { useState } from 'react';

import TypeWriterEffect from 'react-typewriter-effect';


export default function BoxContentProps(props) {
    console.log(props.certificate)
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState([]);
    const [image , setImage] = useState(props.certificate)
    console.log(image)
    useEffect(() =>{
        if(props.data){
            setItem(props.data)
        }
    } , [])
    
    
    return (
        <div>
            <TypeWriterEffect
                        textStyle={{
                        color: '#3F3D56',
                        fontWeight: 500,
                        fontSize: '22px',
                        textAlign: 'center'
                        }}
                        
                        startDelay={2000}
                        cursorColor="#3F3D56"
                        text="Aakash Vishwakarma Bacherol of Engineering"
                        typeSpeed={50}
                        loop = {true}
                        nextTextDelay={1000}
            />
            {items ? <div className='dropdown'>
                        <div className='dropdown-header'>
                            {"Skills"}
                            <i className={`material-icons icon ${isOpen && "open"}`}>chevron_right</i>
                            
                        </div>
                        <div className={`dropdown-body ${isOpen && 'open'}`}>
                            {items.map(item => (
                            <div className="dropdown-item" key={item.id}>
                                {item.label}
                            </div>
                            ))}
                        </div>
                        
                        <div className='dropdown-header'>
                            {"Certificate"}
                            <i className={`material-icons icon ${isOpen && "open"}`}>chevron_right</i>
                            
                        </div>
                        <div className={`dropdown-body ${isOpen && 'open'}`}>
                            {image.map(item => (
                            <div className="dropdown-item" key={item.id}>
                                <img src = {item.image} alt = "image"/>
                            </div>
                            ))}
                        </div>
            </div> : null}
            
        </div>
    )
}
