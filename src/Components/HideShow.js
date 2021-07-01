import React from 'react'

class HideShow extends React.Component{
    constructor(){
        super();
        this.state={
            show:true,

        }
    }
    HideShows(){
        this.setState({
            show : !this.state.show
        })
    }
    render(){
        return(
            <div>
                {
                    this.state.show ?
                    <h1>Hide Show Text</h1>
                    :null
                }
                <button onClick={ ()=>{this.HideShows()} }>Toggle</button>
            </div>
        )
    }
}
export default HideShow;