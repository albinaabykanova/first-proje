import React from 'react';
import './Main.css';
import Robot1 from '../img/robot-1.jpg';
import Robot2 from '../img/robot-2.jpg';
import Robot3 from '../img/robot-3.jpg';

const Main = () => {
  return (
    <div className="main">
      <div className="main-content ">
          <img src={Robot1} alt=""  className="main-img" />
          <img src={Robot2} alt="" className="main-img" />
          <img src={Robot3} alt="" className="main-img" />
      </div>
      <div className='m-search'>
        <input type="text" placeholder="Search by creator, collectible or collection"  className="search-main"/>
      </div>
    
    </div>
  )
}

export default Main
