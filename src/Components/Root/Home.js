import React from 'react'

// import Home from './Components/Home'
import ClassComponent from './../ClassComponent'
import FunctionComponent from './../FunctionComponent'
import Props from './../Props';
import State from './../State'
import HideShow from './../HideShow';
import EventHandiling from './../EventHandiling';
import ComponentDidMount from './../ComponentDidMount';
import ComponentDidUpdate from './../ComponentDidUpdate';
import ComponentWillUnmounted from './../ComponentWillUnmounted';
import Hook from './../Hook';
import UseEffectHook from './../UseEffectHook'
import Froms from './../Froms';
import FromValidation from './../FromValidation';
import ShowHidePassword from './../ShowHidePassword';
import ListMap from './../ListMap';
import StyleComponent from './../StyleComponent';


export default function Home(){
    return(
        <div>
        {/* <Home/> */}
        <ClassComponent text="hello"/>
        <FunctionComponent text="Function Component Here"/>
        <Props text="text" fname={{fn:'shuvo'}} lname={{ln:'pall'}}/>
        <State/>
        <HideShow/>
        <EventHandiling/>
        <ComponentDidMount/>
        <ComponentDidUpdate/>
        <ComponentWillUnmounted/>
        <Hook/>
        <UseEffectHook/>
        <Froms/>
        <FromValidation/>
        <ShowHidePassword/>
        <ListMap/>
        <StyleComponent/>

         {/* non jsx react data */}
         {
           React.createElement(
             'h5',
             {className:'header'},
             'Hello Non JSX'
           )
         }
        </div>
    );
}