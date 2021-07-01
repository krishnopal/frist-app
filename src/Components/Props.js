import React from 'react'

export default function props(p){
    return(
        <div>
            <h1>Props Component {p.text}</h1>
            <h4>{p.fname.fn} {p.lname.ln}</h4>
        </div>
    )
}