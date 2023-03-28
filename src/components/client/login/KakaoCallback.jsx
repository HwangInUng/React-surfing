import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../common/Loading";

function KakaoCallback() {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code);
    //spring 서버로 인증키를 통해 유저정보를 획득하고 로그인 처리 요청
    axios.post(`${process.env.REACT_APP_REQUEST_URL}/api/client/login/oauth/kakao`, {
      authorizationCode: code
    }).then((response) => {
      const accessToken = response.headers.accesstoken;
      //localStorage 저장
      localStorage.setItem("accessToken", accessToken);
      
      //메인 페이지로 이동
      window.location.href = "/";
    }).catch((err) => {
      //에러발생 시 경고처리 후 login 페이지로 전환
      alert(err.response.data.detail);
      window.location.href = "/login";
    })
  }, []);

  return (
    <div>
      <Loading />
    </div>
  )
}

export default KakaoCallback;