import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arr from '../data';

const Detail = () => {
  const {id} = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    setData(arr)
     arr.filter(arr => arr.id == id)
  },[])
     
  console.log("data", data)

   const redirectFunc = () => {
    window.location = "/"
   }

    return (
    <>
      <button onClick={redirectFunc}>tiklaaa</button>
      {
        data .filter(dt => dt.id == id).map((dat, i) =>(
            <div key={i}>{dat.name}</div>
        ))
      }
    </>
    )
}

export default  Detail;