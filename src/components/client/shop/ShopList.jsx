import styled from "styled-components";

const ListContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #7ca2eb;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const ListImageBox = styled.div`
  display: flex;
  height: 250px;
  margin-bottom: 10px;

  .shop-img{
    width: 60%;
    height: 100%;
    margin-right: 10px;
    
    > img{
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
  
  .review-img{
    width: 40%;
    height: 100%;
    border-radius: 10px
  }
`;

const ListLabel = styled.label`
  display: block;
  margin-top: -3px;

  &.title{
    margin-bottom: 5px;
    font-size: 1.4rem;
    font-weight: bold;
  }
  &.score{
    color: #f0a779;
  }
  &.info{
    color: #555;
  }
`;

function ShopList({ shop, src }) {
  //서핑샵에 대한 개인정보를 획득하고 있어야하는 컴포넌트
  return (
    <ListContainer>
      <ListImageBox>
        <a href={`/shop/detail?shopIdx=${shop.shopIdx}`} className="shop-img">
          <img src={`http://localhost:7777/resources/data/${shop.shopImage}`} alt=".." className="shop-img" />
        </a>
        <img src="./img/profile.jpg" alt=".." className="review-img" />
      </ListImageBox>
      <div>
        <ListLabel className="title">{shop.shopName}</ListLabel>
        <ListLabel className="score">
          {'★ 4.5'}
        </ListLabel>
        <ListLabel className="info">
          {shop.shopStart + ":00 ~ " + shop.shopEnd + ":00 / "}
          {shop.shopTown}
        </ListLabel>
      </div>
    </ListContainer>
  );
}

export default ShopList;