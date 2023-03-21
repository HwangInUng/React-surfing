import styled from "styled-components";
import KakaoLogin from "./KaKaoLogin";
import NaverLogin from "./NaverLogin";

const Container = styled.div`
  width: 100%;
  height: 250px;
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