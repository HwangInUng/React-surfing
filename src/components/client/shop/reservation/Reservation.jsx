import { useEffect, useState } from "react";
import styled from "styled-components";
import Bt from "../../../common/Bt";
import ClientContainer from "../../../common/ClientContainer";
import Footer from "../../main/Footer";
import Topbar from "../../main/topbar/Topbar";
import ReservCalendar from "./ReservCalendar";
import ReservMenu from "./ReservMenu";
import ReservTrainer from "./ReservTrainer";
import ReservTime from "./ReservTime";
import { format } from "date-fns";

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
  //DB로 전송할 예약정보
  const [selectMenu, setSelectMenu] = useState({
    shopIdx: 0,
    trainerIdx: 0,
    menuIdx: 0,
    menuCount: 0
  });
  const [count, setCount] = useState(0);
  const [times, setTimes] = useState(
    ['10', '13', '15']
  );
  const [clicked, setClicked] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  /*
    해당 메소드 호출 시 useEffect로 비동기통신을 통한
    당일의 예약현황을 확인하여 한 타임에 30명 이하인 경우만
    예약이 가능하도록 시간 출력
  */
  const onDateClick = (day) => {
    setSelectedDate(day);
    console.log(format(selectedDate, "yyyyMMdd"));
  }

  const movePayment = () => {
    window.location.href="/shop/payment";
  }

  useEffect(() => {
    //비동기 통신으로 DB에 예약현황 조회 후 이용가능 시간만 출력
  }, [selectedDate]);
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
          <label className="content-title">예약 일자</label>
          <ReservCalendar
            onDateClick={onDateClick}
            selectedDate={selectedDate}
          />
        </ContentBox>
        <ContentBox>
          <label className="content-title">예약 시간</label>
          <ReservTime
            times={times}
            clicked={clicked}
            onClick={(e) => setClicked(e.target.value)}
          />
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
            onClick={movePayment}
          />
        </div>
      </ClientContainer>
      <Footer />
    </>
  )
}

export default Reservation;