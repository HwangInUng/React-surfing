import styled from "styled-components";

const ListContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #7ca2eb;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const ListImageBox = styled.div`
  display: flex;
  height: 30vh;
  margin-bottom: 10px;

  .shop-img{
    width: 60%;
    height: 100%;
    border-radius: 10px;
    margin-right: 10px;
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
  return (
    <ListContainer>
      <ListImageBox>
        <img src={shop.src} alt=".." className="shop-img" />
        <img src={src} alt=".." className="review-img" />
      </ListImageBox>
      <div>
        <ListLabel className="title">{shop.title}</ListLabel>
        <ListLabel className="score">
          ★
          {shop.score}
          {' '}
          ({shop.count})
        </ListLabel>
        <ListLabel className="info">
          {shop.time}{' / '}
          {shop.rest}{' / '}
          {shop.location}
        </ListLabel>
      </div>
    </ListContainer>
  );
}

export default ShopList;