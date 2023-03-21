import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components";

const SliderDiv = styled.div`
  width: 100%;
  height: 350px;

  .slider-img{
    border-radius: 20px;
    width: 100%;
    height: 100%;
  }
`;

function AddSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <Slider {...settings}>
        <SliderDiv>
          <img className="slider-img" src="../../img/logo.png" alt="..." />
        </SliderDiv>
        <SliderDiv>
          <img className="slider-img" src="../../img/profile.jpg" alt="..." />
        </SliderDiv>
        <SliderDiv>
          <img className="slider-img" src="../../img/test.jpg" alt="..." />
        </SliderDiv>
      </Slider>
    </>
  );
}

export default AddSlider;