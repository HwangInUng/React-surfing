import styled from "styled-components";
import AddSlider from "./AddSlider";

const AddDiv = styled.div`
  height: 200px;
  margin: -10px;
`;

function Add(){
  return (
    <AddDiv>
      <AddSlider></AddSlider>
    </AddDiv>
  );
}

export default Add;