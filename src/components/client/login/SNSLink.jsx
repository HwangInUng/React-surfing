import styled from "styled-components";
import LoginGoogle from "./LoginGoogle";

const SNSBox = styled.div`
  width: 40%;
  height: 25%;
  display: flex;
  margin: auto;
  margin-bottom: 5px;
  align-items: center;
  padding: 5px;

  .sns-img {
    width: 100%;
    height: 100%;
  }
`;

function SNSLink({ img, onClick }) {
  return (
    <SNSBox>
      <img className="sns-img" src={img} alt="..." onClick={onClick}/>
    </SNSBox>
  )
}

export default SNSLink;