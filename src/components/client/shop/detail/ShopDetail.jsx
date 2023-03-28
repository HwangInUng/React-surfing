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
import { accessClient } from "../../../../App";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

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
  let navigate = useNavigate();
  //샵 세부정보 state
  const [shop, setShop] = useState({});
  //클릭 시 논리값
  const [clicked, setClieckd] = useState("");

  //버튼 클릭 시 기능 데이터 변수
  const categoryData = [
    { value: "test1", title: "♡" },
    { value: "test2", title: "☏" },
    { value: "test3", title: "⚯" },
  ];

  //예약페이지 이동 메소드(로그인한 상태여야 접근가능)
  const moveReservation = () => {
    accessClient.get(`${process.env.REACT_APP_REQUEST_URL}/api/client/token/reserv`)
      .then(() => {
        navigate('/shop/reservation', { state: shop });
      }).catch((err) => {
        alert(err.response.data.detail);
      });
  }

  //세부정보 요청 메소드
  const getShopInfo = (shopIdx) => {
    axios.get(`${process.env.REACT_APP_REQUEST_URL}/api/client/shop/${shopIdx}`)
      .then((res) => {
        setShop(res.data);
        console.log(res.data);
      }).catch((err) => {
        alert(err.response.data.detail);
      });
  }

  //로드 시 샵의 세부정보 세팅
  useEffect(() => {
    const shopIdx = new URL(window.location.href).searchParams.get("shopIdx");
    getShopInfo(shopIdx);
  }, []);
  return (
    <>
      <Topbar />
      <ClientContainer>
        <ImgBox>
          <ShopSlider images={shop.imageList} />
        </ImgBox>

        <DetailBox>
          <div>
            <div>
              <span className="title-box">
                <label className="shop-title">{shop.shopName}</label>
                <img
                  src="/img/location/pin.png"
                  alt="..."
                  className="shop-pin"
                />
              </span>
            </div>
            <div>
              <label className="shop-score">★ 4.7</label>
            </div>
            <div>
              <label className="shop-info">영업시간 : {shop.shopStart + ':00 ~ ' + shop.shopEnd + ':00'}</label>
            </div>
            <div>
              <label className="shop-info">주소 : {shop.shopArea + shop.shopTown}</label>
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
          {shop.trainerList && shop.trainerList.map((trainer, index) => {
            return (
              <ShopTrainer
                key={index}
                trainer={trainer}
              />
            )
          })}
        </ContentBox>
        {/* /.강사 영역 */}

        {/* 상품 영역 */}
        <ContentBox>
          <label className="content-title">강습 및 렌탈</label>
          {shop.menuList && shop.menuList.map((menu, index) => {
            return (
              <ShopMenu
                key={index}
                menu={menu} />
            )
          })}
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