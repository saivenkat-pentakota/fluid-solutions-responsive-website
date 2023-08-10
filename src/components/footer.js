import React from "react";

function footer() {
  return (
    <div
      className="d-flex flex-column footer p-5 "
      style={{ backgroundColor: "blue", color: "white", textAlign: "center" }}
    >
      <div>
        <p className="text" style={{fontSize:"20px"}}>Subscribe to our newsletter for fast updates & news </p>
      </div>
    
        <div class=" d-flex justify-content-center input-group p-3"  >
          <input
            type="text"
            class="form"
            placeholder="Email Address"
            style={{width:"30%",border:"none" }}/>
          
          <div class="input-group-append">
            <button className="btn bg-primary " style={{color:"white"}}>Subscribe Now</button>
          </div>
        </div>
      </div>
  );
}

export default footer;
