import React from 'react';
import Slider from 'react-slick';
import '../../App.css';
import Button from '../common/Button';
const MainInfo = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    cssEase: 'linear',
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="sliderBox sliderBg1">
          <h3>Content Title1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <Button>Click</Button>
        </div>
        <div className="sliderBox sliderBg2">
          <h3>Content Title2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <Button>Click</Button>
        </div>
        <div className="sliderBox sliderBg3">
          <h3>Content Title3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <Button>Click</Button>
        </div>
        <div className="sliderBox sliderBg4">
          <h3>Content Title4</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <Button>Click</Button>
        </div>
        <div className="sliderBox sliderBg5">
          <h3>Content Title5</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <Button>Click</Button>
        </div>
        <div className="sliderBox sliderBg6">
          <h3>Content Title6</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <Button>Click</Button>
        </div>
      </Slider>
    </div>
  );
};

export default MainInfo;
