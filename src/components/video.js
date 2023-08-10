import React from "react";

function video(){
    return(

        <div className="d-flex justify-content-center m-2">
        <iframe
          src="https://www.youtube.com/embed/E7wJTI-1dvQ"
          frameborder="0"
          width="50%"
          height="360"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />
      </div>
    );
}

export default video;