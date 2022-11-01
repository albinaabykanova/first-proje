import React from 'react';
import './TopBuyer.css';
import { topBuyerData } from '../CardData/topBuyerData';

const TopBuyer = () => {
  return (
    <div className="TopBuyer container">
        <div className="topBuyer-header container">
            <span className="topBuyer-title">Top Sellers</span>  
            <span className="topBuyer-title">Top Buyer</span>  
            <span className="topBuyer-title">1day</span>  
        </div>

        <div className="topBuyer-categories row ">
           {topBuyerData.map((topBuyer) => (
            <div className='col-3'>
              <div className="topBuyer-category ">
                  <div className="topBuyer-foto">
                    {topBuyer.image}
                  </div>

                  <div className="topBuyer-n">
                    <span className="topBuyer-name">{topBuyer.name}</span>
                    <span className="topBuyer-details">{topBuyer.details}</span>
                  </div>

              </div>
              </div>
           ))}
       </div>
    </div>
  )
}

export default TopBuyer
