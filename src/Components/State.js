import React from 'react'

export default class State extends React.Component{
    constructor(){
        super();
        this.state={
            name:'Shuvo',
            email:'Shuvo@gmail.com',
            count:0
        }
    }
    UpdateState(){
        this.setState({
            name:'Birsojit',
            count:this.state.count+1
        })
    }
    render(){
        return(
            <div>
                <span>
                    Count: {this.state.count} <br/>
                    Name: {this.state.name} <br/>
                    Email: {this.state.email} <br/>
                </span>
                <button onClick={()=>{this.UpdateState()}} >Updated State</button>
            </div>
        )
    }
}