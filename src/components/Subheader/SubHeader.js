import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../../images/bg-slider-01.jpg";
import Slider2 from "../../images/bg-slider-02.jpg";
import Slider3 from "../../images/bg-slider-03.jpg";
import "./SubHeader.css";
const SubHeader = () => {
  return (
    <section className="mb-5">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Slider1} alt="First slide" />
          <Carousel.Caption>
            <h3>Villa On Hollywoo Boulvard</h3>
            <p>I Capture Excelent Moments and Memory.</p>
            <button className="btn btn-info text-white">More About Me</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Slider2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Villa On Hollywoo Boulvard</h3>
            <p>I Capture Excelent Moments and Memory.</p>
            <button className="btn btn-info text-white">More About Me</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Slider3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Villa On Hollywoo Boulvard</h3>
            <p>I Capture Excelent Moments and Memory.</p>
            <button className="btn btn-info text-white">More About Me</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default SubHeader;
