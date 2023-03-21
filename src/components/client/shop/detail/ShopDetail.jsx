import { useState } from "react";
import styled from "styled-components";
import Bt from "../../../common/Bt";
import ClientContainer from "../../../common/ClientContainer";
import Footer from "../../main/Footer";
import Topbar from "../../main/topbar/Topbar";
import DetailCategory from "./DetailCategory";
import ShopSlider from "./ShopSlider";
import ShopTrainer from "./ShopTrainer";
import ShopMenu from "./ShopMenu";
import ShopReview from "./ShopReview";

const ImgBox = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

const DetailBox = styled.div`
  width: 100%;
  padding: 10px 0px;
  border-top: 1px solid #7ca2eb;
  margin-bottom: 20px;

  .title-box{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .shop-title{
    font-size: 1.6rem;
    font-weight: bold;
  }
  .shop-score{
    font-size: 1.4rem;
    color: #f0a779;
  }
  .shop-info{
    font-size: 1.2rem;
    color: #7e8080;
  }
  .shop-pin{
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
  }
  .icon-box{
    width: 50%;
    margin: auto;
    margin-top: 20px;
  }
`;

const ContentBox = styled.div`
  border-bottom: 1px solid #7ca2eb;
  margin: 30px 0px;

  .content-title{
    font-size: 1.6rem;
    font-weight: bold;
    border-bottom: 1px solid #7ca2eb;
  }
`;

function ShopDetail() {
  const [clicked, setClieckd] = useState("");
  const categoryData = [
    { value: "test1", title: "♡" },
    { value: "test2", title: "☏" },
    { value: "test3", title: "⚯" },
  ];

  const moveReservation = () => {
    window.location.href="/shop/reservation"
  }
  return (
    <>
      <Topbar />
      <ClientContainer>
        <ImgBox>
          <ShopSlider />
        </ImgBox>

        <DetailBox>
          <div>
            <div>
              <span className="title-box">
                <label className="shop-title">서핑샵 이름</label>
                <img src="../../img/location/pin.png" alt="..." className="shop-pin" />
              </span>
            </div>
            <div>
              <label className="shop-score">★ 4.7</label>
            </div>
            <div>
              <label className="shop-info">영업시간 : 10:00 ~ 18:00</label>
            </div>
            <div>
              <label className="shop-info">주소 : 강원도 양양군 강현면 물치리</label>
            </div>
          </div>
          <div className="icon-box">
            <DetailCategory
              data={categoryData}
              clicked={clicked}
              onClick={(e) => setClieckd(e.target.value)}
            />
          </div>
        </DetailBox>

        {/* 강사 영역 */}
        <ContentBox>
          <label className="content-title">강사</label>
          <ShopTrainer />
          <ShopTrainer />
          <ShopTrainer />
        </ContentBox>
        {/* /.강사 영역 */}

        {/* 상품 영역 */}
        <ContentBox>
          <label className="content-title">강습</label>
          <ShopMenu />
          <ShopMenu />
          <ShopMenu />
        </ContentBox>

        <ContentBox>
          <label className="content-title">렌탈</label>
          <ShopMenu />
          <ShopMenu />
          <ShopMenu />
        </ContentBox>
        {/* /.상품 영역 */}

        {/* 후기 영역 */}
        <ContentBox>
          <label className="content-title">후기</label>
          <ShopReview />
          <ShopReview />
          <ShopReview />
        </ContentBox>
        {/* /.후기 영역 */}

        <div style={{ width: "250px", margin: "auto" }}>
          <Bt
            btName="예약하러가기"
            font="2rem"
            color="#f0a779"
            width="250px"
            onClick={moveReservation}
          />
        </div>
      </ClientContainer>
      <Footer />
    </>
  )
}

export default ShopDetail;