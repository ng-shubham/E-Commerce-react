import React from "react";
import { Carousel } from "react-bootstrap";
import slideOne from "../../Assets/Images/bannerImg1-home.jpg";
import slideTwo from "../../Assets/Images/bannerImg2-home.jpg";
import slideThree from "../../Assets/Images/bannerImg3-home.jpg";

function Banner() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={slideOne}
            alt="First slide"
          />
          <div className="CarouselCaption-container">
            <Carousel.Caption>
              <h3>Everyday Styles </h3>
              <p>80% Off</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={slideTwo}
            alt="Second slide"
          />

          <div className="CarouselCaption-container">
            <Carousel.Caption>
              <h3>Casule Wear</h3>
              <p>40-70% Off</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={slideThree}
            alt="Third slide"
          />

          <div className="CarouselCaption-container">
            <Carousel.Caption>
              <h3>HERE {"&"} NOW</h3>
              <p>Min. 40% Off</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Banner;
