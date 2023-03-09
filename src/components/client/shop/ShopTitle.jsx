import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const TitleBox = styled.div`
& > label, svg{
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 2rem;
    font-weight: bold;
  }
`;

function ShopTitle({ icon }) {
  return (
    <TitleContainer>
      <TitleBox>
        <label>
        강원도 양양군
        {Array.isArray(icon) ? icon[0] : icon}
        </label>
      </TitleBox>
      <TitleBox>
          {/* 넘어온 icon이 배열이 아닌경우 표시 x */}
          {Array.isArray(icon) ? icon[1] : null}
      </TitleBox>
    </TitleContainer>
  );
}

export default ShopTitle;