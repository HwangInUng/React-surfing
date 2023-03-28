import styled from "styled-components";

const ReviewBox = styled.div`
  width: 100%;
  display: flex;
  margin: 10px 0px;
  padding: 10px 5px;
  border: 0.5px solid #7ca2eb;
  border-radius: 10px;
  justufy-content: space-between;

  .left-box{
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:flex-start;
  }
  .right-box{
    flex: 1;
    height: 130px;
  }
  .review-img{
    width: 100%;
    height: 100%;
  }
  .title{
    font-size: 1.3rem;
    font-weight: 600;
  }
  .score{
    color: #f0a779;
  }
  .content{
    font-size: 1.1rem;
    color: black;
  }
`;

function ShopReview() {
  return (
    <ReviewBox>
      <div className="left-box">
        <div>
          <div>
            <label className="title">제목</label>
          </div>
          <div>
            <label className="score">★ 4.5</label>
          </div>
        </div>
        <div>
          <p className="content">상세내용이 들어갈 자리</p>
        </div>
        <div>
          <label>작성자 / 2023-03-21 12:05</label>
        </div>
      </div>
      <div className="right-box">
        <img
          src="/img/logo.png"
          alt=".."
          className="review-img"
        />
      </div>
    </ReviewBox>
  )
}

export default ShopReview;