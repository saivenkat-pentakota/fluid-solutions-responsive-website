import React from "react";
import profileimage from '../images/profile-image.avif';


function profileSection(){
    return(
        <div className=" p-5 d-flex flex-row justify-content-center" style={{backgroundColor:"skyblue"}}>

<div class="card m-2" style={{width: "18rem"}}>
  <img class="card-img-top" src={profileimage} alt=""/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn btn-primary">Go somewhere</button>
  </div>
</div>
<div class="card m-2" style={{width: "18rem"}}>
  <img class="card-img-top" src={profileimage} alt=""/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn btn-primary">Go somewhere</button>
  </div>
</div>
<div class="card m-2" style={{width: "18rem"}}>
  <img class="card-img-top" src={profileimage} alt=""/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn btn-primary">Go somewhere</button>
  </div>
</div>
</div>
    );
}

export default profileSection;