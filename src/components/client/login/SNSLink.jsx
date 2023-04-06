import styled from "styled-components";

const SNSBox = styled.div`
  width: 40%;
  height: 25%;
  display: flex;
  margin: auto;
  margin-bottom: 5px;
  align-items: center;
  padding: 5px;

  .img-box{
    width: 20%;
    height: 100%;
  }
  .title-box{
    width: 80%;
    height: 100%;
    background: ${props => props.back};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.back === "#03bf19" ? "white" : "black"};

    > label{
      text-align: center;
      width: 100%;
      font-size: 1.4rem;
      font-weight: 500;
      cursor: pointer;
    }
  }
  .sns-img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

function SNSLink({ img, back, title, onClick }) {
  return (
    <SNSBox back={back}>
      <div className="img-box">
        <img className="sns-img" src={img} alt="..." onClick={onClick} />
      </div>
      <div className="title-box">
        <label onClick={onClick}>{title}</label>
      </div>
    </SNSBox>
  )
}

export default SNSLink;