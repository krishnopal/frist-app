import React from 'react'

class ClassComponent extends React.Component{

    constructor(){
        super()
    }
    componentDidMount(){
        console.warn('called life cycle')
    }
    render(){
        return(
            <div>
                <h1>Class Component {this.props.text}</h1>
            </div>
        )
    }
}

export default ClassComponent;