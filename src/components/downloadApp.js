import React from "react";

import smartPhoneImage from "../images/phone-image.avif";

function downloadApp() {
  return (
    <div className="d-flex flex-row ">
      <div className="smartPhone">
        <img
          className="carousel-images"
          style={{ width: "80%", height: "100%" }}
          src={smartPhoneImage}
          alt="First slide"
        />
      </div>

      <div className="download-text m-5 p-5">
        <h3 className="p-2">
          A faster ,easier to create <br /> organized lists
        </h3>
        <p className="p-2">A faster ,easier to create organized lists</p>
        <button className="download-now ">Download Now</button>
      </div>
    </div>
  );


}

export default downloadApp;