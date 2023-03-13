import { useEffect } from "react";
import styled from "styled-components";

const PopularDiv = styled.div`
  height: 300px;

  .popular-title{
    font-size: 1.7rem;
    font-weight: bold;
  }
`;

const ShopWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 85%;
  align-items: center;

  .shop-item{
    position: absolute;
    width: 30%;
    height: 100%;
    margin-right: 10px;
    background: tomato;
  }
`;

function PopularShop() {
  const testData = [
    { name: "서핑샵1", score: "4.5", time: "10:00~18:00", location: "물치해변" },
    { name: "서핑샵2", score: "4.4", time: "10:00~18:00", location: "물치해변" },
    { name: "서핑샵3", score: "4.2", time: "10:00~18:00", location: "물치해변" },
    { name: "서핑샵4", score: "4.1", time: "10:00~18:00", location: "물치해변" },
  ];
  return (
    <PopularDiv>
      <label className="popular-title">인기 서핑샵</label>
      <ShopWrapper id="wrapper">
        {testData && testData.map((data, index) => {
          return (
            <div className="shop-item" style={{ left: `${31 * (index)}%` }} key={index}>
              
            </div>
          )
        })}
      </ShopWrapper>
    </PopularDiv>
  );
}

export default PopularShop;