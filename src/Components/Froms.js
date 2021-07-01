import React from 'react'

export default class Froms extends React.Component{
    constructor(){
        super();
        this.state={
            name:null,
            password:null,
        }
    }
    submit(){
        console.log(this.state)
    }
    render(){
        return(
            <div>
                <h1>From Component</h1>
                <input type='text' name='name' onChange={(e)=>{this.setState({name:e.target.value})}} />
                <br/>
                <input type='password' name='password' onChange={(e)=>{this.setState({password:e.target.value})}}/>
                <br/>
                <button onClick={()=>{this.submit()}} >Submit</button>
                <br/><br/>
            </div>
        )
    }
}