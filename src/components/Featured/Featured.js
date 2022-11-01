import React , {useState} from "react";
import "./Featured.css";
import { featuredData } from "../CardData/featuredData";
import featured from '../img/topBuyer.png';

function Featured() {

    const [name, setName] = useState("Jonathan Monaghan");
    const [email, setEmail] = useState('@jonmonaghan');
  return (
    <div className="featured container">
        <div className="featured-card">
            <div className="upper-container">
                <div className="image-container">
                    <img src={featured} alt="" className="featured-img" height={"100px"} width={"100px"} />    
                </div>
            </div>
            <div className="lower-container">
                <h2>{name}</h2>
                <h5>{email}</h5>
            </div>
        </div>  
        <div className="featured-card">
            <div className="upper-container">
                <div className="image-container">
                    <img src={featured} alt="" className="featured-img" height={"100px"} width={"100px"} />    
                </div>
            </div>
            <div className="lower-container">
                <h2>{name}</h2>
                <h5>{email}</h5>
            </div>
        </div>  
        <div className="featured-card">
            <div className="upper-container">
                <div className="image-container">
                    <img src={featured} alt="" className="featured-img" height={"100px"} width={"100px"} />    
                </div>
            </div>
            <div className="lower-container">
                <h2>{name}</h2>
                <h5>{email}</h5>
            </div>
        </div>  
        <div className="featured-card">
            <div className="upper-container">
                <div className="image-container">
                    <img src={featured} alt="" className="featured-img" height={"100px"} width={"100px"} />    
                </div>
            </div>
            <div className="lower-container">
                <h2>{name}</h2>
                <h5>{email}</h5>
            </div>
        </div>  
        <div className="featured-card">
            <div className="upper-container">
                <div className="image-container">
                    <img src={featured} alt="" className="featured-img" height={"100px"} width={"100px"} />    
                </div>
            </div>
            <div className="lower-container">
                <h2>{name}</h2>
                <h5>{email}</h5>
            </div>
        </div>  
    </div>
  );
}

export default Featured;