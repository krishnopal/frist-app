import React,{useState} from 'react'
// import { useState } from 'react/cjs/react.production.min'

export default function Hook(){
    const[count,setCount]=useState(0)
    return(
        <div>
            <h1>Hook Component Count {count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </div>
    )
}