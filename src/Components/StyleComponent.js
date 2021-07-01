import React from 'react'
import './Style.css'

export default class StyleComponent extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div>
                <h1 className="headerStyle">React Style Global Components</h1>
                <h1>React Style Inline Components</h1>
                {/* <h1 className="headerStyle">React Style Global Components</h1> */}
            </div>
        )
    }
}