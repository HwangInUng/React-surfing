import { useState } from "react";
import styled from "styled-components";
import Bt from "../../../common/Bt";
import ClientContainer from "../../../common/ClientContainer";
import Footer from "../../main/Footer";
import Topbar from "../../main/topbar/Topbar";
import ReservCalendar from "./ReservCalendar";
import ReservMenu from "./ReservMenu";
import ReservTrainer from "./ReservTrainer";

const ContentBox = styled.div`
  border-bottom: 1px solid #7ca2eb;
  margin-bottom: 30px;

  .content-title{
    font-size: 1.6rem;
    font-weight: bold;
    border-bottom: 1px solid #7ca2eb;
  }
`;

const PriceLabel = styled.label`
  font-size: 1.7rem;
  font-weight: bold;
`;

function Reservation() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Topbar />
      <ClientContainer>
        {/* 강사 영역 */}
        <ContentBox>
          <label className="content-title">강사</label>
          <ReservTrainer />
        </ContentBox>
        {/* /.강사 영역 */}

        {/* 상품 영역 */}
        <ContentBox>
          <label className="content-title">강습</label>
          <ReservMenu />
        </ContentBox>

        <ContentBox>
          <label className="content-title">렌탈</label>
          <ReservMenu />
        </ContentBox>
        {/* /.상품 영역 */}

        {/* 날짜 및 시간선택 영역 */}
        <ContentBox>
          <label className="content-title">날짜 및 시간</label>
          <ReservCalendar />
        </ContentBox>
        {/* /.날짜 및 시간선택 영역 */}

        <div className="flex">
          {/* 강습 및 상품의 금액 x count */}
          <PriceLabel>총 금액 : 00000원</PriceLabel>
          <Bt
            btName="예약하기"
            font="1.5rem"
            color="#f0a779"
            width="150px"
          />
        </div>
      </ClientContainer>
      <Footer />
    </>
  )
}

export default Reservation;