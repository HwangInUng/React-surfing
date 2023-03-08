import styled from "styled-components";
import Add from "./content/Add";
import PopularShop from "./content/PopularShop";
import RecentBoard from "./content/RecentBoard";
import Waether from "./content/Waether";

const ContentContainer = styled.div`
  position: relative;
  top: 200px;
  margin: auto;
  margin-bottom: 200px;
  width: 60%;
  background: lightGray;
  border-radius: 20px;

  -webkit-box-shadow: 0px 0px 5px 0px #555; 
  box-shadow: 0px 0px 5px 0px #555;
`;

const ContentBox = styled.div`
  width: 100%;
  border: 1px solid tomato;
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 30px;
  background: white;
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