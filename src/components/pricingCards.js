import React from "react";
import pricingCard from "../images/pricing cards.jpg";

function pricingCards() {
  return (
    <div>
      <div className=" d-flex m-3 justify-content-center">
        <p className="p-3" style={{fontSize:"20px"}}> 
          Choose the best pricing for start your journey
        </p>
      </div>
      <div className="pricingCards d-flex justify-content-center m-5">
        <img src={pricingCard} alt="pricing card" />
      </div>
    </div>
  );
}

export default pricingCards;
