import React , {useEffect, useState} from 'react'

const UseEffectHook = () =>{
    const [count , setCount] = useState(0);
    useEffect(()=>{
        console.log(count)
    },[count==5])
    return(
        <div>
            <h1>Use Effect Hook Component {count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Effect Button</button>
        </div>
    )
}
export default UseEffectHook;