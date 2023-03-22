import { loadTossPayments } from "@tosspayments/payment-sdk";
import { useEffect, useState } from "react";
import styled from "styled-components";
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
  const [rsvMsg, setRsvMsg] = useState("");
  const [reservation, setReservation] = useState({
    rsvDate: "",
    rsvTime: "",
    rsvMsg: "",
    rsvName: "",
    rsvPhone: "",
    member: "",
    shop: "",
    trainer: "",
  });

  //페이호출 메서드
  const handlePayment = (subject) => {
    const random = new Date().getTime() + Math.random();
    const randomId = btoa(random);
    console.log(randomId);

    //시간판단 후 가능하면 가상계좌도 연동 필요
    if(subject === "카드"){ //간편결제 함수 실행
      loadTossPayments(client_id).then(tossPayments => {
        tossPayments.requestPayment(subject, {
          amount: 1000,
          orderId: `${randomId}`, //문자열 처리를 위한 ``사용
          orderName: '입문강습 외 1건', //결제 이름
          customerName: '테스트', //판매자, 판매처 이름
          successUrl: 'http://localhost:3000/shop/payment/success',
          failUrl: 'http://localhost:3000/shop/payment/fail',
        })
      });
    }
  }

  useEffect(() => {
    if (rsvMsg.length >= 50) {
      alert("50자 이내로 입력해주세요.");
      //50자 이상 입력 시 subString으로 메세지 유지
      setRsvMsg(rsvMsg.substring(0, rsvMsg.length - 1));
      return;
    }
  }, [rsvMsg]);
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
              value="유저이름"
              readOnly={true}
              width="50%"
              mb="5px"
            />
            <Input
              type="text"
              value="01091716860"
              readOnly={true}
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
              <label className="info-point">2023-03-22 / 10:00</label>
            </div>
            <div>
              <label className="info-label">서핑샵/강사</label>
              <label className="info-point">서핑샵1 / 강사1</label>
            </div>
            <div>
              <label className="info-label">선택상품</label>
              <label className="info-point">입문강습, 보드렌탈</label>
            </div>
          </div>
        </ContentBox>
        {/* .예약내용 */}

        <div className="flex">
          {/* 강습 및 상품의 금액 x count */}
          <PriceLabel>총 금액 : 00000원</PriceLabel>
          <div>
            <Bt
              btName="간편결제"
              font="1.5rem"
              color="#f0a779"
              width="150px"
              onClick={() => handlePayment("카드")}
            />
          </div>
        </div>
      </ClientContainer>
      <Footer />
    </>
  )
}

export default Payment;