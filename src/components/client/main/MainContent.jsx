import styled from "styled-components";
import Add from "./content/Add";
import PopularShop from "./content/PopularShop";
import RecentBoard from "./content/RecentBoard";
import Waether from "./weather/Weather";

const ContentContainer = styled.div`
  position: relative;
  top: 150px;
  margin: auto;
  margin-bottom: 200px;
  width: 60%;
  background: #eeeeee;
  border-radius: 20px;

  -webkit-box-shadow: 0px 0px 5px 0px #555; 
  box-shadow: 0px 0px 5px 0px #555;
  }
`;

const ContentBox = styled.div`
  width: 100%;
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 30px;
  background: white;
  box-shadow: 0px 0px 3px 0px #7ca2eb;
`;

function MainContent() {
  return (
    <ContentContainer>
      <ContentBox><Waether /></ContentBox>
      <ContentBox><Add /></ContentBox>
      <ContentBox><PopularShop /></ContentBox>
      <ContentBox><RecentBoard /></ContentBox>
    </ContentContainer>
  );
}

export default MainContent;