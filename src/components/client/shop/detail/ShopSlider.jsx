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

function ShopSlider({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  }
  return (
    <>
      <Slider {...settings}>
        {images && images.map((image, index) => {
          return (
            <SliderDiv key={index}>
              <img
                className="slider-img"
                src={`${process.env.REACT_APP_IMG_URL}/resources/data/${image}`}
                alt="..."
              />
            </SliderDiv>
          )
        })}
      </Slider>
    </>
  );
}

export default ShopSlider;