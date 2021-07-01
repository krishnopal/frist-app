import React from 'react'

export default class FromValidation extends React.Component{
    constructor(){
        super();
        this.state={
            user:"",
            password:"",
            userError:"",
            passError:""
        }
    }
    valid(){
        if(!this.state.user.includes('@') && this.state.password.length<5){
            this.setState(
                {userError:'Username Is Invalid..!', passError:'Password length shuld be more then 5'}
            )
        }
        else if(!this.state.user.includes('@')){
            this.setState(
                {userError:'Username Is Invalid..!'}
            )
        }
        else if(this.state.password.length<5){
            this.setState(
                {passError:'Password length shuld be more then 5'}
            )
        }
        else{
            return true;
        }
    }
    submit(){
        this.setState(
            {userError:"", passError:""}
        )
        if(this.valid()){
            alert('This Data is submited..!');
        }
    }
    render(){
        return(
            <div>
                <h1>From Validation</h1>
                <input type='text' name='user' onChange={(e)=>{this.setState({user:e.target.value})}} />
                <p style={{color:'red'}} >{this.state.userError}</p>
                <input type='text' name='password' onChange={(e)=>{this.setState({password:e.target.value})}} />
                <p style={{color:'red'}} >{this.state.passError}</p>
                <button onClick={()=>{this.submit()}}>Submit</button>
            </div>
        )
    }
}