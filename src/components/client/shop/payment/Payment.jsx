import { loadTossPayments } from "@tosspayments/payment-sdk";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { accessClient } from "../../../../App";
import Bt from "../../../common/Bt";
import ClientContainer from "../../../common/ClientContainer";
import Input from "../../../common/Input";
import Footer from "../../main/Footer";
import Topbar from "../../main/topbar/Topbar";

const ContentBox = styled.div`
  border-bottom: 1px solid #7ca2eb;
  margin-bottom: 30px;

  .content-title{
    font-size: 1.6rem;
    font-weight: bold;
    border-bottom: 1px solid #7ca2eb;
  }
  .info-input{
    margin: 10px 0px;
  }
  .request{
    width: 50%;
    height: 150px;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #cecece;
    border-radius: 10px;
    resize: both;
  }
  .info-label{
    font-size: 1.2rem;
    margin: 5px 10px;
  }
  .info-point{
    font-size: 1.3rem;
    font-weight: 500;
    color: black;
  }
`;

const PriceLabel = styled.label`
  font-size: 1.7rem;
  font-weight: bold;
`;

function Payment() {
  //페이 연동 client_key
  const client_id = process.env.REACT_APP_TOSS_CLIENT_ID;
  const location = useLocation();
  const orderName = () => {
    const count = location.state.menu.length;
    const firstMenu = location.state.menu[0];
    return (count > 1 ? `${firstMenu} 외 ${count}건` : firstMenu)
  }
  //요청메세지 state
  const [rsvMsg, setRsvMsg] = useState("");
  //예약정보 state
  const [reserv, setReserv] = useState(location.state);

  //예약정보 등록 메소드
  const handleReservation = (subject) => {
    accessClient.post(`${process.env.REACT_APP_REQUEST_URL}/api/client/token/reserv`, reserv)
    .then((res) => {
      console.log(res.data);
      //예약번호를 로컬 스토리지에 임시저장 후 callback에서 호출
      localStorage.setItem("rsvIdx", res.data.rsvIdx);
      handlePayment(subject);
    })
  }

  //페이호출 메소드
  const handlePayment = (subject) => {
    const random = new Date().getTime() + Math.random();
    const randomId = btoa(random);

    //시간판단 후 가능하면 가상계좌도 연동 필요
    if (subject === "카드") { //간편결제 함수 실행
      loadTossPayments(client_id).then(tossPayments => {
        tossPayments.requestPayment(subject, {
          amount: reserv.amount,
          orderId: `${randomId}`, //문자열 처리를 위한 ``사용
          orderName: orderName(), //결제 이름(여러건일 경우 복수처리)
          customerName: 'surfing', //판매자, 판매처 이름
          successUrl: 'http://localhost:3000/shop/payment/success',
          failUrl: 'http://localhost:3000/shop/payment/fail',
        })
      });
    }
  }

  //요청 메세지 허용범위 초과 시 경고메세지 출력
  useEffect(() => {
    if (rsvMsg.length >= 50) {
      alert("50자 이내로 입력해주세요.");
      //50자 이상 입력 시 subString으로 메세지 유지
      setRsvMsg(rsvMsg.substring(0, rsvMsg.length - 1));
      return;
    }
  }, [rsvMsg]);

  useEffect(() => {
    console.log(reserv);
  }, [reserv]);
  return (
    <>
      <Topbar />
      <ClientContainer>
        {/* 예약자 정보 영역 */}
        <ContentBox>
          <label className="content-title">예약자 정보</label>
          <div className="info-input">
            <Input
              type="text"
              placeholder="예약자명을 입력하세요."
              onBlur={(e) => setReserv({...reserv, rsvName: e.target.value})}
              width="50%"
              mb="5px"
            />
            <Input
              type="text"
              onBlur={(e) => setReserv({...reserv, rsvPhone: e.target.value})}
              placeholder="핸드폰번호를 입력하세요."
              width="50%"
            />
          </div>
        </ContentBox>
        {/* /.예약자 정보 영역 */}

        {/* 요청메세지 */}
        <ContentBox>
          <label className="content-title">요청메세지</label>
          <div className="info-input">
            <textarea
              className="request"
              placeholder="요청하실 메세지를 50자 이내로 입력해주세요."
              value={rsvMsg}
              onChange={(e) => setRsvMsg(e.target.value)}
              onBlur={(e) => setReserv({...reserv, rsvMsg: e.target.value})}
            />
          </div>
        </ContentBox>
        {/* 요청메세지 */}

        {/* 예약내용 */}
        <ContentBox>
          <label className="content-title">요청메세지</label>
          <div className="info-input">
            <div>
              <label className="info-label">날짜/시간</label>
              <label className="info-point">
                {reserv.rsvDate + " / " + reserv.rsvTime + ":00"}
              </label>
            </div>
            <div>
              <label className="info-label">서핑샵/강사</label>
              <label className="info-point">
                {reserv.shop.shopName + " / " + reserv.trainer.trainerName}
              </label>
            </div>
            <div>
              <label className="info-label">선택상품</label>
              <label className="info-point">
                {reserv.menu.length === 1 ?
                  reserv.menu[0] :
                  reserv.menu[0] + " 외 " + reserv.menu.length + "건"
                }
              </label>
            </div>
          </div>
        </ContentBox>
        {/* .예약내용 */}

        <div className="flex">
          {/* 강습 및 상품의 금액 x count */}
          <PriceLabel>
            총 금액 : {reserv.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
          </PriceLabel>
          <div>
            <Bt
              btName="간편결제"
              font="1.5rem"
              color="#f0a779"
              width="150px"
              onClick={() => handleReservation("카드")}
            />
          </div>
        </div>
      </ClientContainer>
      <Footer />
    </>
  )
}

export default Payment;