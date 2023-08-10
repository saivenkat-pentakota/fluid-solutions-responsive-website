import React from "react";
import Carousel from "react-bootstrap/Carousel";
import laptopcarousel from "../images/laptopcarousel.jpg";
import carouselchart from "../images/carouselchart.jpeg";
import carousellaptopsimage from "../images/carousellaptops.jpeg";


function carousel(){
    return(
        <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 " alt="carouselimage" src={carouselchart} />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 " src={laptopcarousel} alt="carouselimage" />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 " src={carousellaptopsimage} alt="carouselimage" />
          <Carousel.Caption>
            <h3>Label for third slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default carousel;