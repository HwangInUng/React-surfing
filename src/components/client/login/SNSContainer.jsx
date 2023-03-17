import styled from "styled-components";
import LoginGoogle from "./LoginGoogle";

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
      <LoginGoogle />
    </Container>
  )
}

export default SNSContainer;