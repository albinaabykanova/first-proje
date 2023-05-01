import React from 'react';
import './Main.css';
import Robot1 from '../img/tehnologi.jpeg';
import Robot2 from '../img/tehnologi.jpeg';
import Robot3 from '../img/tehnologi.jpeg';

const Main = () => {
  return (
    <div className="main container">
      <div className="main-content">
          <img src={Robot1} alt=""  className="main-img " />
          <img src={Robot2} alt="" className="main-img" />
          <img src={Robot3} alt="" className="main-img" />
      </div>
    </div>
  )
}

export default Main
