import styled from "styled-components";
import KakaoLogin from "./KaKaoLogin";
import NaverLogin from "./NaverLogin";
import LoginGoogle from "./LoginGoogle";
import SNSLink from "./SNSLink";

const Container = styled.div`
  width: 100%;
  height: 30vh;
`;

function SNSContainer() {
  return (
    <Container>
      {/* <LoginGoogle /> */}
      <KakaoLogin />
      <NaverLogin />
    </Container>
  )
}

export default SNSContainer;