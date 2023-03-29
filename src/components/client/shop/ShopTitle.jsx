import { useState } from "react";
import styled from "styled-components";
import ShopSearch from "./ShopSearch";

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const TitleBox = styled.div`
& > label {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 2rem;
    font-weight: bold;
  }
  .title-img {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
  }
`;

function ShopTitle({ selectSpot, setSelectSpot }) {
  // 지역 선택창을 띄울 논리값
  const [openPost, setOpenPost] = useState(false);
  // 차후 맵 API와 연동할 state
  const [openMap, setOpenMap] = useState(false);
  // 지역명을 출력할 변수
  const spotName = selectSpot.localName + ' ' + selectSpot.townName + ' ' + selectSpot.spotName;
  return (
    <TitleContainer>
      {openPost ?
        <ShopSearch
          open={openPost}
          setOpen={setOpenPost}
          setSelectSpot={setSelectSpot}
        /> :
        null}
      <TitleBox>
        <label>
          {spotName}
          <img
            className="title-img"
            src="/img/location/pin.png"
            onClick={() => setOpenPost((current) => !current)}
          />
        </label>
      </TitleBox>
      <TitleBox>
        <img
          className="title-img"
          src="/img/location/map.png"
          onClick={() => setOpenMap((current) => !current)}
        />
      </TitleBox>
    </TitleContainer>
  );
}

export default ShopTitle;