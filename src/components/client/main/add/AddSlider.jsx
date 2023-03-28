import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components";

const SliderDiv = styled.div`
  width: 100%;
  height: 200px;

  .slider-img{
    width: 100%;
    height: 100%;
  }
`;

function AddSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <Slider {...settings}>
        <SliderDiv>
          <img className="slider-img" src="/img/add/add1.jpg" alt="..." />
        </SliderDiv>
        <SliderDiv>
          <img className="slider-img" src="/img/add/add2.jpg" alt="..." />
        </SliderDiv>
        <SliderDiv>
          <img className="slider-img" src="/img/add/add3.jpg" alt="..." />
        </SliderDiv>
      </Slider>
    </>
  );
}

export default AddSlider;