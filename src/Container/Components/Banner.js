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
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Banner;
