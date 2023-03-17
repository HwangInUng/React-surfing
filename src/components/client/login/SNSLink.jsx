import styled from "styled-components";
import LoginGoogle from "./LoginGoogle";

const SNSBox = styled.div`
  width: 60%;
  height: 25%;
  display: flex;
  margin: auto;
  margin-bottom: 5px;
  align-items: center;
  padding: 5px;
  background: ${props => props.back};
  overflow: hidden;

  .sns-img {
    width: 15%;
    height: 100%;
  }
  .login-li{
    display: flex;
    align-items: center;
    width: 100%;
    list-style: none;
    cursor: pointer;
  }
  .sns-text {
    width: 85%;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    border-left: 1px solid #e5e5e5;
    color: ${props => props.back === "yellow" ? "black" : "white"};
  }
`;

function SNSLink({name, img, back}) {
  return (
    <SNSBox back={back}>
      <li className="login-li">
        <img className="sns-img" src={img} alt="..." />
        <span className="sns-text" >{name}</span>
      </li>
      {name === "구글 로그인" ? <LoginGoogle/> : null}
    </SNSBox>
  )
}

export default SNSLink;