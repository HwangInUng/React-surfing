import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SNSLink from "./SNSLink";

function KakaoLogin() {
  const redirect_location = useLocation();

  const client_id = process.env.REACT_APP_KAKAO_CLIENT_ID;
  const redirect_uri = process.env.REACT_APP_KAKAO_REDIRECT_URI;

  const url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}`;

  const loginKaKao = async () => {
    window.location.href=url;
  }

  useEffect(() => {
    if(window.location.href.includes("code")){
      const code = new URL(window.location.href).searchParams.get("code");
      console.log(code);

      axios.get('/api/client/login/oauth/kakao?code=' + code)
      .then((response) => {
        console.log(response.data);
      }).catch((err) => {
        console.log(err);
      })
    }
  }, [redirect_location]);

  return <SNSLink img="./img/login/kakao.png" onClick={loginKaKao}/>
}

export default KakaoLogin;