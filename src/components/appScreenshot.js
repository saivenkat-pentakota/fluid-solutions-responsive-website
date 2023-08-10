import React from "react";
import appImage from "../images/app screenshot.jpg";

function appScreenshot(){
    return(

        <div className=" d-block flex-column m-3" style={{ textAlign: "center" }}>
        <h1>App Screenshot</h1>
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div>
          <img class="screenshot-img" src={appImage} alt="" />
        </div>
      </div>
    );
}

export default appScreenshot;