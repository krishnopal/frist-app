import React from 'react'
export default class ComponentWillUnmounted extends React.Component {

    componentWillUnmount() {
        alert('User Has Been Deleted..!!');
    }
    render() {
        return ( 
            <div>
                <ul>
                    <li>Name: Shuvo Pal</li>
                    <li>Email: Shuvo@gmail.com</li>
                    <li>Name: Shuvo Pal SP</li>
                </ul>
            </div>
        )
    }
}