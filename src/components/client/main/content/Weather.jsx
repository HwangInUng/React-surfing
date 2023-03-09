import { BsFillCloudSunFill, BsPinMapFill } from "react-icons/bs";
import styled from "styled-components";

const WeatherContainer = styled.div`
  padding: 10px;

  .box-border{
    height: 250px;
  }
`;

const WeatherBox = styled.div`
  margin-bottom: 10px;

& > label, svg{
    display: flex;
    align-items: center;
    justify-content: flex-start;

    font-size: 2rem;
    font-weight: bold;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftBox = styled.div`
  width: 40%;
  margin-right: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 0px #7ca2eb;
`;

const RightBox = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Today = styled.div`
  
`;

const Days = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  border: 1px solid #e5e5e5;
  border-radius: 20px;
  box-shadow: 0px 0px 3px 0px #7ca2eb;

  & > label {
    font-size: 1.1rem;
    font-weight: bold;
  }

  & > svg{
    width: 1.5em;
    height: 1.5em;
  }
`;

function Weather() {
  return (
    <WeatherContainer>
      <WeatherBox>
        <label>강원도 양양군
          <BsPinMapFill />
        </label>
      </WeatherBox>
      <Wrapper>
        <LeftBox className="box-border">
          <Today>테스트</Today>
        </LeftBox>
        <RightBox className="box-border">
          <Days>
            <label>월요일</label>
            <BsFillCloudSunFill/>
            <label>-1℃</label>
            <label>1.2m</label>
            <label>북/3kt</label>
          </Days>
          <Days>
            <label>월요일</label>
            <BsFillCloudSunFill/>
            <label>-1℃</label>
            <label>1.2m</label>
            <label>북/3kt</label>
          </Days>
          <Days>
            <label>월요일</label>
            <BsFillCloudSunFill/>
            <label>-1℃</label>
            <label>1.2m</label>
            <label>북/3kt</label>
          </Days>
          <Days>
            <label>월요일</label>
            <BsFillCloudSunFill/>
            <label>-1℃</label>
            <label>1.2m</label>
            <label>북/3kt</label>
          </Days>
          <Days>
            <label>월요일</label>
            <BsFillCloudSunFill/>
            <label>-1℃</label>
            <label>1.2m</label>
            <label>북/3kt</label>
          </Days>
          <Days>
            <label>월요일</label>
            <BsFillCloudSunFill/>
            <label>-1℃</label>
            <label>1.2m</label>
            <label>북/3kt</label>
          </Days>
        </RightBox>
      </Wrapper>
    </WeatherContainer>
  )
}

export default Weather;