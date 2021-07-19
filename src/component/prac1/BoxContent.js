import React from 'react'
// import { useState } from 'react';

// import {TypingEffect} from 'react-typing-text-effect'
import "./Box.css"
import image1 from './Images/1.jpg'
import image2 from './Images/2.jpg'
import image3 from './Images/3.jpg'
import c1 from './Images/C1.jpg'
import c2 from './Images/C2.png'
import c3 from './Images/C3.png'


// import TypeWriterEffect from 'react-typewriter-effect';
import BoxContentProps from './BoxContentProps';

// import Typewriter from 'typewriter-effect';


export default function BoxContent() {


    return (
        <div className = "Container">
                <div className = "Box" >
                    <img src = {image1} alt = "image"/>

                    <BoxContentProps data = {[{id: 0, label: "ReactJs"}, {id: 1, label: "Python", }, {id: 2, label: "Css", }, {id: 3, label: "Redux", }, {id: 5, label: "Php" } ]}
                                    certificate = {[{id: 0, image: c1}, {id: 0, image: c2}, {id: 0, image: c3} ]}/>
                    
                </div>
                <div className = "Box" >
                    <img src = {image2} alt = "image"/>
                                
                    <BoxContentProps data = {[{id: 0, label: "ReactJs"}, {id: 1, label: "Python", }, {id: 2, label: "Css", }, {id: 3, label: "Redux", }, {id: 5, label: "Php" } ]}
                                    certificate = {[{id: 0, image: c1}, {id: 0, image: c2}, {id: 0, image: c3} ]}/>
                    
                </div>


                <div  className = "Box" >
                    <img src = {image3} alt = "image"/>
                    
                    <BoxContentProps data = {[{id: 0, label: "ReactJs"}, {id: 1, label: "Python", }, {id: 2, label: "Css", }, {id: 3, label: "Redux", }, {id: 5, label: "Php" } ]}
                                    certificate = {[{id: 0, image: c1}, {id: 0, image: c2}, {id: 0, image: c3} ]}/>

                </div>


            
        </div>
        
    )
}
