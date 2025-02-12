import React from "react";
import "./Ticker.css"; // Ensure you create this CSS file for styling

const Ticker = () => {
  return (
    <div className="ticker-wrap">
      <div className="ticker">
        <div className="ticker-content">
          {[...Array(8)].map((_, index) => (
            <span className="item" key={index}>Frontend <span className="text-[#E4ED05]">&</span> Design <span className="text-[#E4ED05]">&</span> Revamp <span className="text-[#E4ED05]">&</span> Development <span className="text-[#E4ED05]">&</span> Audit <span className="text-[#E4ED05]">&</span> Branding <span className="text-[#E4ED05]">& </span></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
