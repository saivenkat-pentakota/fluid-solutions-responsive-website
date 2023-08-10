import React from "react";

function contactUsForm() {
  return (
    <div className="contactUsForm  justify-content-center  d-flex flex-row " style={{}}>
      <div className="contactdetails m-5 p-5" style={{ backgroundColor: "lightblue" }}>
        <h1>Lets get in touch</h1>
        <p>we are open for any suggestion or just to have a chat. </p>
        <div className="address">
          <p>Address: 198 west street ,Suite 721 New York NY 10016.</p>
          <p>Phone: 123456789</p>
          <p>Email:info@yoursite.com</p>
          <p>website: yoursite.com</p>
        </div>
      </div>

      <div className="getin-touch m-5">
        <h1>Get in touch</h1>
        <form>
          <div class="form-group m-1">
            <label for="exampleName">Full Name</label>
            <input
              type="name"
              class="form-control"
              id="exampleName"
              placeholder="Enter Full Name"
            />
          </div>
          <div class="form-group m-1">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group m-1">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-group form-check m-1">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary m-1">
            Submit
          </button>
        </form>
      </div>
    </div>
    
  );
}

export default contactUsForm;
