import React from "react";
import "./Ticker.css"; 

const Ticker = () => {
  return (
    <div className="ticker-wrap mt-28">
      <div className="ticker">
        <div className="ticker-content">
          {[...Array(8)].map((_, index) => (
              <span className="item px-16" key={index}>
                frontend
                <span className="text-[#E4ED05] px-16 font-light">&</span>
                design
                <span className="text-[#E4ED05] px-16 font-light">&</span> 
                revamp
                <span className="text-[#E4ED05] px-16 font-light">&</span> 
                development
                <span className="text-[#E4ED05] px-16 font-light">&</span> 
                audit
                <span className="text-[#E4ED05] px-16 font-light">&</span> 
                branding
                <span className="text-[#E4ED05] px-16 font-light">& </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
