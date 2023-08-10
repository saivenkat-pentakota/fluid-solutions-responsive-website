import React from "react";
import pricingCard from "../images/pricing cards.jpg";

function pricingCards() {
  return (

    <div className="pricingCards d-flex justify-content-center m-5">
      <img src = {pricingCard}  alt = "pricing card"/>
    </div>
  );
}

export default pricingCards;
