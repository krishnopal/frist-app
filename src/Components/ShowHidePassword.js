import React from 'react'

export default class ShowHidePassword extends React.Component{
    constructor(){
        super();
        this.state={
            showPassword:false,
        }
    }
    showPasswordToggle(){
        // const {showPassword} = this.state;
        this.setState({showPassword : !this.state.showPassword})
    }
    render(){
        // const {showPassword} = this.state;
        return(
            <div>
                <h1>Hide And Show Password</h1>
                <input type={(this.state.showPassword) ? "text" : "password"} name="password" />
                <button onClick={()=>{this.showPasswordToggle()}}>{(this.state.showPassword) ? 'Hide' : 'Show'} Password</button>
            </div>
        )
    }
}