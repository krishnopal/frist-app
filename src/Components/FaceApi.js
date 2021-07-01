import React from 'react'

class FaceApi extends React.Component{
    constructor(){
        super();
        this.state={
            users:null
        }
    }
    componentDidMount(){
        fetch('https://reqres.in/api/users').then((resp)=>{
            resp.json().then((result)=>{
                // console.log(result.data)
                this.setState({users:result.data})
            })
        })
    }
    render() {
     return(
         <div>
             <h1>Fech Api</h1>
            
                    <div>
                        <table>
                            <tr>
                                <th width='10%'>Count</th>
                                <th width='25%'>Name</th>
                                <th width='35%'>Email</th>
                                <th width='30%'>Images</th>
                            </tr>
{
this.state.users?
this.state.users.map((index,i)=>
                            <tr>
                                <td>{i+1}</td>
                                <td>{index.first_name} {index.last_name}</td>
                                <td>{index.email}</td>
                                <td><img src={index.avatar}/></td>
                            </tr>
)
:
null
}
                        </table>
                    </div>
                 
         </div>
     )   
    }
}
export default FaceApi; 