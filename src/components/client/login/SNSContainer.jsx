import styled from "styled-components";
import KakaoLogin from "./KaKaoLogin";
import LoginGoogle from "./LoginGoogle";
import SNSLink from "./SNSLink";

const Container = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SNSContainer() {
  return (
    <Container>
      {/* <LoginGoogle /> */}
      <KakaoLogin />
    </Container>
  )
}

export default SNSContainer;