import styled from "styled-components";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

//정보에 대한 요소를 담을 컨테이너
const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

//한 분야의 정보를 담을 div
const InfoItem = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 20px 30px;
  border-radius: 10px;
  cursor: pointer;

  -webkit-box-shadow: 0px 0px 5px -1px #000000; 
  box-shadow: 0px 0px 5px -1px #000000;
`;

//정보에 대한 타이틀
const InfoTitle = styled.span`
  font-size: 1.3rem;
  font-weight: 800;
  padding-bottom: 5px;
  border-bottom: 1px solid #555;
`;

//수치를 담을 컨테이너
const InfoResultContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;

//수치 정보
const InfoMoney = styled.span`
  font-size: 2rem;
  font-weight: 600;
`;

//비율
const InfoRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;

  .infoIcon{
    font-size: 1.3rem;
    margin-left: 5px;
    color: blue;
  }

  .infoIcon.negative{
    color: red;
  }
`;

//부가 설명
const InfoSub = styled.span`
  font-size: 0.9rem;
  color: #555;
`;

function Info() {
  const infos = [
    { title: '총 매출', money: 2500, rate: -10.3 },
    { title: '강습', money: 1100, rate: -20.2 },
    { title: '렌탈', money: 1400, rate: +9.9 },
  ];
  return (
    <InfoContainer>
      {/* item단위로 반복문으로 적용 */}
      {infos.map((info, index) => {
        return (
          <InfoItem key={index}>
            <InfoTitle>{info.title}</InfoTitle>
            <InfoResultContainer>
              <InfoMoney>{info.money}원</InfoMoney>
              <InfoRate>
                Trend: {info.rate}
                {info.rate < 0 ?
                  <TrendingDownIcon className="infoIcon negative" /> :
                  <TrendingUpIcon className="infoIcon" />
                }
              </InfoRate>
            </InfoResultContainer>
            <InfoSub>지난달 대비 변동률</InfoSub>
          </InfoItem>
        )
      })}
      {/* 반복문 종료 */}
    </InfoContainer>
  );
}

export default Info;