import React from "react";
import { redirect } from "react-router-dom";
import arr from '../data';

const Home = () => {

    const redirectFunc = (id) => {
        window.location = `/detail/${id}`
    }
 
    return (
    <div>
          {
            arr.map((arr, i) => (
              <div onClick={() =>redirectFunc(arr.id)} style={{width:"300px", margin: "10px", cursor: "pointer", border: '1px solid red', padding: '5px'}}>{arr.name}</div>
            ))
          }
    </div>
    )
}

export default  Home;