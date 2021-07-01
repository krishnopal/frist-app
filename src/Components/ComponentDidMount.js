import React from 'react'

export default class ComponentDidMount extends React.Component{
    constructor(){
        super();
        this.state={
            data:'null'
        }
        console.log('constractor')
    }
    componentDidMount(){
        this.setState({data:'updated'})
        console.log('componentDidMount')
    }
    render(){
        console.log('render')
        return(
            <div>
                <h1>Component Did Mount</h1>
            </div>
        )
    }
} 