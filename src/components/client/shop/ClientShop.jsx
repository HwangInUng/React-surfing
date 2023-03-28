import ClientContainer from "../../common/ClientContainer";
import Footer from "../main/Footer";
import Topbar from "../main/topbar/Topbar";
import ShopTitle from "./ShopTitle";
import ShopCategory from "./ShopCategory";
import { useEffect, useState } from "react";
import ShopList from "./ShopList";
import axios from "axios";

function ClientShop() {
  //매장 리스트 정보
  const [shops, setShops] = useState([]);
  //버튼 클릭 여부를 판단할 state
  const [clicked, setClicked] = useState("");

  const getShopList = () => {
    axios.get(`${process.env.REACT_APP_REQUEST_URL}/api/client/shops`)
      .then((res) => {
        setShops(res.data);
        console.log(res.data);
      }).catch((err) => {
        alert(err.response.data.detail);
      })
  }
  //로드와 동시에 전체리스트 출력
  useEffect(() => {
    getShopList();
    setClicked("regdate");
  }, []);

  //button 생성을 위한 데이터
  const buttonData = [
    { title: "등록일순", value: "regdate" },
    { title: "평점순", value: "shopScore" },
    { title: "영업상태", value: "status" },
  ];
  return (
    <>
      <Topbar />
      <ClientContainer>
        {/* 상단 지역명 */}
        <ShopTitle />
        {/* 카테고리 영역 */}
        <ShopCategory
          data={buttonData}
          clicked={clicked}
          onClick={(e) => setClicked(e.target.value)}
        />
        {/* 서핑샵 리스트 영역 */}
        {shops && shops.map((shop, index) => {
          return (
            <ShopList key={index} shop={shop} />
          )
        })}
      </ClientContainer>
      <Footer />
    </>
  )
}

export default ClientShop;