import React from 'react'

export default function FunctionComponent(prop){
    const red=()=>{
        alert('Function Component Called')
    }
    return(
        <div>
            <h1 onClick={red}>{prop.text}</h1>
            <h1>{new Date().toLocaleTimeString()}</h1>
        </div>
    )
}