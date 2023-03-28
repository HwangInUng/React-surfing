import { accessClient } from "../../../../App";
import { useEffect } from "react";
import Loading from "../../../common/Loading";
import { useNavigate } from "react-router-dom";

function TossCallback() {
  const navigate = useNavigate();
  useEffect(() => {
    const paymentKey = new URL(window.location.href).searchParams.get("paymentKey");
    const orderId = new URL(window.location.href).searchParams.get("orderId");
    const amount = new URL(window.location.href).searchParams.get("amount");

    //spring 서버로 인증키를 통해 유저정보를 획득하고 로그인 처리 요청
    accessClient.post(`${process.env.REACT_APP_REQUEST_URL}/api/client/token/payment`, {
      //spring 서버로 전달할 요청 params
      paymentKey: paymentKey,
      orderId: orderId,
      amount: amount,
      rsvIdx: localStorage.getItem("rsvIdx"),
    }).then((res) => {
      //spring에서 처리된 정보 전달
      const reserv = res.data;
      console.log(reserv);

      //예약내역 페이지로 전환 및 임시저장 정보 삭제
      localStorage.removeItem("rsvIdx");
      navigate("/shop/reservation/detail", {state: reserv});
    }).catch((err) => {
      //에러발생 시 경고처리 후 login 페이지로 전환
      alert(err.response.data.detail);
      window.history.back();
    })
  }, []);

  return (
    <div>
      <Loading />
    </div>
  )
}

export default TossCallback;