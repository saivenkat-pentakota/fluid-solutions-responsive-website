import React from "react";
import { Route, Router ,Link} from "react-router-dom";
import Signup from "../images/signup.png";
import Logo from "../images/logo.png";
import GoogleLogo from "../images/google-logo.png";
import FacebookLogo from "../images/faceboo-logo.png";
import LoginPage from "../components/login";

function siginup() {
  <Router>
    <Route component={LoginPage} />
  </Router>;

  return (
    <div
      class="d-flex flex-row justify-content-center"
      style={{ backgroundColor: "skyblue" }}
    >
      <div>
        <img
          className="logo"
          src={Logo}
          alt="logo"
          style={{ width: "180px", margin: "20px" }}
        />
      </div>
      <div class="left-portion m-3 p-5">
        <img
          src={Signup}
          alt="logipage"
          style={{ width: "500px", height: "500px", borderRadius: "5px" }}
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
              style={{ width: "400px" }}
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
              style={{ width: "400px" }}
            />
          </div>
          <div className="d-flex flex-row justify-content-center">
            <button
              type="submit"
              class="btn submit-btn bg-primary "
              style={{ width: "200px", color: "white" }}
            >
              CREATE ACCOUNT
            </button>
          </div>
        </form>
        <p class="hr-lines">or signup with</p>
        <div class=" d-flex flex-row justify-content-center">
          <button
            class="btn btn-outline-danger m-3 "
            style={{ width: "150px", color: "white" }}
          >
            <img src={GoogleLogo} alt="googleLogo" style={{ width: "20px" }} />{" "}
            Google
          </button>
          <button
            className="btn btn-outline-primary m-3"
            style={{ width: "150px", color: "white" }}
          >
            <img src={FacebookLogo} alt="facebookLogo" style={{ width: "20px" }} /> facebook
          </button>
        </div>
        <div
          class="sign-up m-2"
          style={{ fontSize: "15px", fontWeight: "400" }}
        >
          <p>
            Have an account? <Link to="/LoginPage">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default siginup;
