import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../../common/Loading";

function TossCallback() {
  useEffect(() => {
    const paymentKey = new URL(window.location.href).searchParams.get("paymentKey");
    const orderId = new URL(window.location.href).searchParams.get("orderId");
    const amount = new URL(window.location.href).searchParams.get("amount");

    //spring 서버로 인증키를 통해 유저정보를 획득하고 로그인 처리 요청
    axios.post('/api/client/token/reserv/payment', {
      //spring 서버로 전달할 요청 params
      paymentKey: paymentKey,
      orderId: orderId,
      amount: amount
    }).then((response) => {
        //spring에서 처리된 정보 전달
        console.log(response.data);

        //예약내역 페이지로 전환예정
        window.location.href = "/";
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