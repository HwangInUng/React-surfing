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
import { useLocation, useNavigate } from "react-router-dom";
import { accessClient } from "../../../../App";

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

//결제금액 및 상품 정보 누적을 위해 전역변수 사용
let price = 0;
let menuNames = [];

function Reservation() {
  const navicate = useNavigate();
  const location = useLocation();
  const times = ['10', '13', '15']; //예약시간
  const [clicked, setClicked] = useState(""); //time버튼 논리값
  const [shop, setShop] = useState({}); //서핑샵 정보 객체
  const [selectedDate, setSelectedDate] = useState(new Date()); //날짜 선택 시 변경될 state

  //서버에 전송할 예약정보 객체
  const [reserv, setReserv] = useState({
    rsvDate: "", //예약날짜 
    rsvTime: "", //예약시간
    menu: menuNames, //예약 상품명
    trainerIdx: 0, //선택된 강사번호
    shopIdx: location.state.shopIdx, //매장 번호
    amount: price, //총금액
  });

  // 시간 버튼 클릭 시 예약객체 시간 및 디자인 변경 메소드
  const handleTime = (e) => {
    setClicked(e.target.value);
    setReserv({ ...reserv, rsvTime: e.target.value });
  }
  /*
    해당 메소드 호출 시 useEffect로 비동기통신을 통한
    당일의 예약현황을 확인하여 한 타임에 30명 이하인 경우만
    예약이 가능하도록 시간 출력
  */
  const onDateClick = (day) => {
    setSelectedDate(day);
    setReserv({ ...reserv, rsvDate: format(day, "yyyyMMdd") });
  }

  //수량 클릭 시 해당하는 메뉴명을 지정
  const handleMenu = (menuName, count) => {
    /*
      카운터가 1개라도 있을 경우 해당 메뉴 배열에 포함
      카운터가 1로 다시 내려갈 경우 배열에 해당 메뉴명이 있으면 패스
      카운터가 0으로 돌아온 메뉴는 배열에서 제외
    */
    if (count === 1 && !menuNames.includes(menuName)) {
      setReserv({ ...reserv, menu: menuNames = menuNames.concat(menuName) });
    } else if (count < 1) {
      setReserv({ ...reserv, menu: menuNames = menuNames.filter(menuNames => menuNames !== menuName) });
    }
  }
  //결제 금액 계산 함수
  const handleAmonut = (plus, menuPrice) => {
    //plus는 조건을 판단할 논리값
    if (plus) {
      setReserv({ ...reserv, amount: price += menuPrice });
    } else {
      setReserv({ ...reserv, amount: price -= menuPrice });
    }
  }

  //결제페이지 이동(토큰 체크 및 예약정보 객체 전달)
  const movePayment = () => {
    accessClient.get(`/api/client/token/payment`)
      .then(() => {
        navicate(`/shop/payment`, { state: reserv });
      }).catch((err) => {
        alert(err.response.data.detail);
      });
  }

  //최초 로드 시 예약에 사용될 샵 정보를 획득
  useEffect(() => {
    setShop(location.state);
  }, []);

  //test
  useEffect(() => {
    console.log(reserv);
  }, [reserv]);
  return (
    <>
      <Topbar />
      <ClientContainer>
        {/* 강사 영역 */}
        <ContentBox>
          <label className="content-title">강사</label>
          {shop.trainerList && shop.trainerList.map((trainer, index) => {
            return (
              <ReservTrainer
                key={index}
                trainer={trainer}
                setReserv={(e) => setReserv({ ...reserv, trainerIdx: Number(e.target.value) })}
              />
            )
          })}
        </ContentBox>
        {/* /.강사 영역 */}

        {/* 상품 영역 */}
        <ContentBox>
          <label className="content-title">강습</label>
          {shop.menuList && shop.menuList.map((menu, index) => {
            return (
              <ReservMenu
                key={index}
                menu={menu}
                handleMenu={handleMenu}
                handleAmonut={handleAmonut}
              />
            )
          })}
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
            onClick={(e) => handleTime(e)}
          />
        </ContentBox>
        {/* /.날짜 및 시간선택 영역 */}

        <div className="flex">
          {/* 강습 및 상품의 금액 x count */}
          <PriceLabel>
            총 금액 : {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
          </PriceLabel>
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