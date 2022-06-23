import { useState } from "react";
import React  from "react";

const Home =()=>{
    const [count,setCount] = useState(0)
    const [menu,setMenu] = useState(false)
    const plusfun=()=>{
        setCount(count +1)
    }
    const minusfun=()=>{
        if(count > 0){
            setCount(count -1)
        }
    }
    const resetfun=()=>{
        setCount(0)
    }
    const menufun=()=>{
        setMenu(!menu)
    }
    return(
        <>
        <h2>Home page</h2>
           <h1>{count}</h1>
          <button onClick={plusfun}>plus</button>
          <button onClick={minusfun}>minus</button>
          <button onClick={resetfun}>Reset</button>
          <button className={menu ? "active" :''} onClick={menufun}>menu</button>

        </>
    )
}
export  default Home