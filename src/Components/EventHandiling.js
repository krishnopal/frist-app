import React from 'react'

// class event handiling
// export default class EventHandiling extends React.Component{
//     testFun(){
//         alert('This is Event Handiling')
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Event Handiling</h1>
//                 {/* <button onClick={()=>this.testFun()}>Event Handiling</button> */}
//                 <button onClick={this.testFun.bind()}>Event Handiling</button>
//             </div>
//         )
//     }
// }

// function event handiling
export default function EventHandiling(){
    const consttestFun=()=>{
        alert('Event Handiling Const')
    }
    function testFun(){
        alert('Event Handiling')
    }
    return(
        <div>
            <h1>Event Handiling</h1>
            <button onClick={testFun}>Event Handiling</button>
            <button onClick={consttestFun}>Event Handiling Const</button>
        </div>
    )
}