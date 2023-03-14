import styled from "styled-components";

const Item = styled.div`
  position: absolute;
  width: 35%;
  height: 100%;
  margin-right: 10px;
  padding: 5px;
`;

const TopBox = styled.div`
  width: 100%;
  height: 80%;
  margin-bottom: 5px;

  .shop-img{
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }  
`;

const BottomBox = styled.div`
  width: 100 %;
  height: 20 %;
  border-top: 1px solid #7ca2eb;

  .info-box{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.4rem;
  }
  .shop-label{
    font-size: 1.2rem;
    font-weight: bold;
  }
  .score-label{
    color: #f0a779;
  }
  .bottom-label{
    color: #555;
  }
`;

function ShopItem({ data, index }) {
  return <Item style={{ left: `${36 * (index)}% ` }}>
    <TopBox>
      <a href="/shop"><img className="shop-img" src="./img/test.jpg" alt="..." /></a>
    </TopBox>
    <BottomBox>
      <div className="info-box">
        <label className="shop-label">{data.name}</label>
        <label className="score-label">{"★ " + data.score}</label>
      </div>
      <label className="bottom-label">{data.time + " / " + data.location}</label>
    </BottomBox>
  </Item>
}

export default ShopItem;