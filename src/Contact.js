import React from "react";
import { useNavigate,useParams } from "react-router-dom";

const Contact =()=>{
    const path = useNavigate();
    const {id} = useParams();
    const pathfun = ()=>{
        path("/")
    }
    const pathfun1 = ()=>{
        path('/Contact/kkdkdk')
    }
    return(
        <>
        <h2>Contact page</h2>
        <button onClick={pathfun}>0000000</button>
        <button onClick={pathfun1}>1111111111</button>
        <h1>{id}</h1>
        </>
    )
}
export  default Contact