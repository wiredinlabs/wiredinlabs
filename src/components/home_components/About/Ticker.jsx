import React from "react";
import "./Ticker.css"; 

const Ticker = () => {
  return (
    <div className="ticker-wrap mt-20 md:-mt-10 lg:-mt-5 xl:mt-[120px] mb-2 lg:mb-24">
      <div className="ticker">
        <div className="ticker-content">
          {[...Array(8)].map((_, index) => (
              <span className="item px-16" key={index}>
                frontend
                <span className="text-[#E4ED05] px-16">&</span>
                design
                <span className="text-[#E4ED05] px-16">&</span> 
                revamp
                <span className="text-[#E4ED05] px-16">&</span> 
                development
                <span className="text-[#E4ED05] px-16">&</span> 
                audit
                <span className="text-[#E4ED05] px-16">&</span> 
                branding
                <span className="text-[#E4ED05] px-16">& </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
