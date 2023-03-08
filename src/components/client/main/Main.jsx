import styled from "styled-components";
import MainContent from "./MainContent";

const MainContainer = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
`;

const MainImageDiv = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 500px;

  .main-image{
    width: 100%;
    height: 100%;
    opacity: 0.7;
  }
`;

function Main() {
  return (
    <MainContainer>
      <MainImageDiv>
        <img src="./img/main.jpg" className="main-image" />
      </MainImageDiv>
      <MainContent />
    </MainContainer>
  );
}

export default Main;