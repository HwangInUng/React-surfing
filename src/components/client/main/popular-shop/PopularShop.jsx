import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import VerticalWrapper from "../../../common/VerticalWrapper";
import ShopItem from "./ShopItem";

const PopularDiv = styled.div`
  height: 300px;

  .popular-title{
    font-size: 1.7rem;
    font-weight: bold;
  }
`;

function PopularShop() {
  //인기서핑샵 리스트 state 선언
  const [shops, setShops] = useState([]);
  //로드 시 서버로 인기서핑샵 정보 요청
  const getPopularShop = () => {
    axios.get(`/api/client/main/popular`)
    .then((res) => {
      //반환된 인기서핑샵 정보 세팅
      setShops(res.data);
      console.log(res.data);
    }).catch((err) => {
      alert(err.response.data.detail);
    })
  }

  useEffect(() => {
    getPopularShop();
  }, []);
  return (
    <PopularDiv>
      <label className="popular-title">인기 서핑샵</label>
      <VerticalWrapper>
        {shops && shops.map((shop, index) => {
          return (
            <ShopItem key={index} shop={shop} index={index}/>
          )
        })}
      </VerticalWrapper>
    </PopularDiv>
  );
}

export default PopularShop;