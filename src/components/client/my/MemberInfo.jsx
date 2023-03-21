import styled from "styled-components";

const InfoBox = styled.div`
  margin: 20px auto;
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #7ca2eb;

  .info{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: 1px solid #7ca2eb;
    padding: 40px 30px;
    margin: 0px 5px;
  }
  .content{
    color: #7ca2eb;
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

function MemberInfo(){
  return (
    <InfoBox>
      <div className="info">
        <label className="content">방문한 서핑샵: 0건</label>
      </div>
      <div className="info">
        <label className="content">등록한 뽐내기: 0건</label>
      </div>
    </InfoBox>
  )
}

export default MemberInfo;