import React from "react";

function pricing() {
  return (
    <div className=" d-flex flex-row justify-content-center m-5">

        {/* card-1 */}
      <div class="card d-flex flex-column m-3" style={{width:"250px" ,height:"380px"}}>
        <div className="card-top-portion p-3 " style={{backgroundColor:"lightgreen"}}>
          <div className="d-flex justify-content-end">
            <h5>Basic</h5>
          </div>
          <h1>10$</h1>
          <p>USD/Month</p>
          <p>For more details <br></br>click here</p>
        </div>

        <div class="d-flex flex-column card-body" style={{textAlign:"center"}}>
          <p class="card-title">perfect for beginners!</p>
          <p class="card-text">subscription details</p>
          <button className="btn bg-primary" style={{ color: "white" }}>
            subscribe now
          </button>
        </div>
      </div>

      {/* card-2 */}
      <div class="card d-flex flex-column m-3" style={{width:"250px" ,height:"380px"}}>
        <div className="card-top-portion p-3 " style={{backgroundColor:"lightblue"}}>
          <div className="d-flex justify-content-end">
            <h5>Standard</h5>
          </div>
          <h1>20$</h1>
          <p>USD/Month</p>
          <p>For more details <br></br>click here</p>
        </div>

        <div class="d-flex flex-column card-body" style={{textAlign:"center"}}>
          <p class="card-title">perfect for intermediate!</p>
          <p class="card-text">subscription details</p>
          <button className="btn bg-primary" style={{ color: "white" }}>
            subscribe now
          </button>
        </div>
      </div>

      {/* card-3 */}
      <div class="card d-flex flex-column m-3" style={{width:"250px" ,height:"380px"}}>
        <div className="card-top-portion p-3 " style={{backgroundColor:"lightpink"}}>
          <div className="d-flex justify-content-end">
            <h5>Premium</h5>
          </div>
          <h1>30$</h1>
          <p>USD/Month</p>
          <p>For more details <br></br>click here</p>
        </div>

        <div class="d-flex flex-column card-body" style={{textAlign:"center"}}>
          <p class="card-title">Unlimited Access for users!</p>
          <p class="card-text">subscription details</p>
          <button className="btn bg-primary" style={{ color: "white" }}>
            subscribe now
          </button>
        </div>
      </div>
      
      
    </div>
  );
}

export default pricing;
