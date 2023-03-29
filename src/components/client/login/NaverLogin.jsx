import SNSLink from "./SNSLink";

function NaverLogin() {
  const client_id = process.env.REACT_APP_NAVER_CLIENT_ID;
  const redirect_uri = process.env.REACT_APP_NAVER_REDIRECT_URI;
  const state = process.env.REACT_APP_NAVER_STATE;

  const url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${client_id}&state=${state}&redirect_uri=${redirect_uri}`;

  //cors 이슈로 인해 href 방식으로 호출
  const loginKaKao = () => {
    window.location.href = url;
  }
  return <SNSLink
    img="/img/login/naver.png"
    onClick={loginKaKao}
    back="#03bf19"
    title="네이버로그인"
  />
}

export default NaverLogin;