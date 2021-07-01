import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Home from './Components/Root/Home'
import About from './Components/Root/About'
import FaceApi from './Components/FaceApi';


function App() {
  return (
    <div className="App">
      <header className="App-header">
         {/* <img src={logo} className="App-logo" alt="logo" /> */}
         <Router>

           <Link to="">Home</Link>
           <Link to="/about">About</Link>
           <Link to="/FaceApi">FaceApi</Link>
           <Route exact path='/' component={Home} />
           <Route path='/about' component={About} />
           <Route path='/FaceApi' component={FaceApi} />

         </Router>
      </header>
    </div>
  );
}


// Component Will Unmounted
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       toggle:true
//     }
//   }
//   render(){
//     return(
//       <div>
//         <h1>Component Will Unmounted</h1>
//         {
//         this.state.toggle? 
//         <ComponentWillUnmounted/> :null
//         }
//         <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>Delete User</button>
//       </div>
//     );
//   }
// }

export default App;
