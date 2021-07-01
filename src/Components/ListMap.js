import React from 'react'

export default class ListMap extends React.Component{
    constructor(){
        super();
        this.state={
            list:[
                {name:'Shuvo Pal',email:'Shuvo@gmail.com'},
                {name:'Bishojit Pal',email:'Bishojit@gmail.com'},
                {name:'Krishno Pal',email:'Krishno@gmail.com'}
            ]
        }
    }
    render(){
        return(
            <div>
                <h1>Listing Map</h1>
                {
                    this.state.list.map((item)=>
                        <div>
                            <ul>
                                <li>
                                    <span>Name: {item.name} </span>  
                                    <span>Email: {item.email}</span>
                                </li>
                            </ul>
                        </div>
                    )
                }
                
            </div>
        )
    }
}