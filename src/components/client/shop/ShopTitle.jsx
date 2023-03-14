import { useState } from "react";
import styled from "styled-components";

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

function ShopTitle() {
  const [openPost, setOpenPost] = useState(false);
  const [openMap, setOpenMap] = useState(false);
  return (
    <TitleContainer>
      <TitleBox>
        <label>
          강원도 양양군
          <img
            className="title-img"
            src="./img/location/pin.png"
            onClick={() => setOpenPost((current) => !current)}
          />
        </label>
      </TitleBox>
      <TitleBox>
        <img
          className="title-img"
          src="./img/location/map.png"
          onClick={() => setOpenMap((current) => !current)}
        />
      </TitleBox>
    </TitleContainer>
  );
}

export default ShopTitle;