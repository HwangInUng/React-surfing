import styled from "styled-components";
import VerticalWrapper from "../../../common/VerticalWrapper";
import ShopItem from "./ShopItem";

const PopularDiv = styled.div`
  height: 40vh;

  .popular-title{
    font-size: 1.7rem;
    font-weight: bold;
  }
`;

function PopularShop() {
  const testData = [
    { name: "서핑샵1", score: "4.5", time: "10:00~18:00", location: "물치해변" },
    { name: "서핑샵2", score: "4.4", time: "10:00~18:00", location: "물치해변" },
    { name: "서핑샵3", score: "4.2", time: "10:00~18:00", location: "물치해변" },
    { name: "서핑샵4", score: "4.1", time: "10:00~18:00", location: "물치해변" },
    { name: "서핑샵5", score: "4.1", time: "10:00~18:00", location: "물치해변" },
  ];
  return (
    <PopularDiv>
      <label className="popular-title">인기 서핑샵</label>
      <VerticalWrapper>
        {testData && testData.map((data, index) => {
          return (
            <ShopItem key={index} data={data} index={index}/>
          )
        })}
      </VerticalWrapper>
    </PopularDiv>
  );
}

export default PopularShop;