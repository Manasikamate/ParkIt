import { useState } from "react";
import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from "./Card";
export default function Cards(props){
    let data=props.data;
    const[index,setIndex]=useState(0);
    function leftShift(){
        if(index-1<0) setIndex(data.length-1);
        else setIndex(index-1);
    }
    function rightShift(){
        if(index===data.length-1) setIndex(0);
        else setIndex(index+1);
    }
    return(
        <div className="flex flex-row justify-center align-center  ">
        
         <div className=" flex flex-row outline mt-36 h-96 w-6/12 bg-white  rounded-md justify-center align-center">
            <button onClick={leftShift}>
            {/* <FontAwesomeIcon icon="fa-solid fa-chevron-left" /> */} left
            </button>
            <Card data={data[index]}/>
            <button onClick={rightShift}>
                right
            </button>
         </div>
       </div>
    )
}