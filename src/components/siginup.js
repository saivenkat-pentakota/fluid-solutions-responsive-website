import React from "react";
import Signup from "../images/signup.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFacebook ,faGoogle } from '@fortawesome/free-brands-svg-icons';



function siginup() {
  return (
    <div class="d-flex flex-row p-5" style={{backgroundColor:"skyblue"}}>
        <div class="left-portion m-3 p-5">
          <img
            src={Signup}
            alt="logipage"
            style={{ width: "500px", height: "500px" ,borderRadius:"5px"}}
          />
        </div>
        <div class="right-portion m-3 p-5">
          <form class="sign-up">
            <h4>SIGNUP</h4>
            <div class="mb-3 ">
              <label for="email" class="form-label">
                Email Address
              </label>
              <input
                type="email"
                class="form-control "
                id="email"
                placeholder="Enter your email address"
                style={{width:"400px"}}
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Create a password"
                style={{width:"400px"}}
              />
            </div>
            <div className="d-flex flex-row justify-content-center">
            <button type="submit" class="btn submit-btn bg-primary " style={{width:"200px" ,color:"white"}}  >
              CREATE ACCOUNT
            </button>
            </div>
            
          </form>
          <p class="hr-lines">or signup with</p>
          <div class=" d-flex flex-row justify-content-center">
            <button class="btn social bg-primary m-3 " style={{width:"150px" ,color:"white"}} >
            <FontAwesomeIcon  icon={faGoogle}/> Google
            </button>
            <button className="btn bg-primary  m-3" style={{width:"150px",color:"white"}} ><FontAwesomeIcon  icon={faFacebook}/> facebook</button>
          </div>
          <div class="sign-up m-2" style={{fontSize:"15px" ,fontWeight:"400"}}>
            <p>
              Have an account? <a href = "#">login</a>
            </p>
          </div>
        </div>
    </div>
  );
}

export default siginup;
