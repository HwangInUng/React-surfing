import ClientContainer from "../../common/ClientContainer";
import Footer from "../main/Footer";
import Topbar from "../main/topbar/Topbar";
import { BsPinMapFill, BsFillMapFill } from "react-icons/bs";
import ShopTitle from "./ShopTitle";
import ShopCategory from "./ShopCategory";
import { useEffect, useState } from "react";
import ShopList from "./ShopList";

function ClientShop() {
  //버튼 클릭 여부를 판단할 state
  const [clicked, setClicked] = useState("");
  //클릭 시 state 값 변경
  const handleClicked = (e) => {
    setClicked(e.target.value);
  }
  //로드와 동시에 등록일순으로 정렬
  useEffect(() => {
    setClicked("regdate");
  }, []);

  //button 생성을 위한 데이터
  const buttonData = [
    { title: "등록일순", value: "regdate" },
    { title: "평점순", value: "shopScore" },
    { title: "영업상태", value: "status" },
  ];

  //임시 매장 데이터 객체
  const shops = [
    {
      title: "서핑샵1",
      src: "./img/profile.jpg",
      //평점 및 카운트는 review 테이블에서 계산하여 출력
      score: "4.6",
      count: 200,
      time: "10:00 ~ 18:00",
      rest: "매주 화요일 휴무",
      location: "물치해변"
    },
    {
      title: "서핑샵2",
      src: "./img/profile.jpg",
      score: "4.4",
      count: 113,
      time: "10:00 ~ 18:00",
      rest: "매주 화요일 휴무",
      location: "물치해변"
    },
  ];

  return (
    <>
      <Topbar />
      <ClientContainer>
        {/* 상단 지역명 */}
        <ShopTitle />
        {/* 카테고리 영역 */}
        <ShopCategory data={buttonData} clicked={clicked} onClick={handleClicked} />
        {/* 서핑샵 리스트 영역 */}
        {shops && shops.map((shop, index) => {
          return (
            <ShopList key={index} shop={shop} src={"./img/test.jpg"} />
          )
        })}
      </ClientContainer>
      <Footer />
    </>
  )
}

export default ClientShop;