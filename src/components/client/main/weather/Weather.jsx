import { useEffect, useState } from "react";
import styled from "styled-components";
import WeatherSearch from "./WeatherSearch";

const WeatherContainer = styled.div`
  padding: 10px;

  .box-border{
    height: 250px;
  }
`;

const WeatherBox = styled.div`
  margin-bottom: 10px;

  & > label {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    font-size: 2rem;
    font-weight: bold;

    & > img {
      width: 2em;
      height: 2em;
    }
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
  border-radius: 20px;
  padding: 15px 10px;
  box-shadow: 0px 0px 5px 0px #7ca2eb;

  .left-inner{
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    justify-content: center;
    
    .title{
      border-bottom: 2px solid #7ca2eb;
    }

    .flex{
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .around{
    justify-content: space-around;
  }
  `;

const InnerLabel = styled.label`
  font-size: ${props => props.size || "2.3rem"};
  font-weight: bold;
  `;

const InnerImg = styled.img`
  width: ${props => props.size || "4em"};
  height: ${props => props.size || "4em"};
  margin-right: 10px;
`;

const RightBox = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Days = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 5px 0px #7ca2eb;

  
  & > div {
    width: 20%;
    text-align: center;

    & > label {
      font-size: 1.2rem;
      font-weight: bold;
    }
    & > img{
      width: 1.5em;
      height: 1.8em;
    }
  }

`;

function Weather() {
  //title state
  const [spotTitle, setSpotTitle] = useState({
    spotIdx: 12,
    localName: "강원도",
    townName: "양양군",
    spotName: "강현면",
    spotLati: 38.147243,
    spotLongi: 128.6098,
  });
  //타이틀에 출력할 조합 변수
  const title = spotTitle.localName + " " + spotTitle.townName + " " + spotTitle.spotName;
  //날씨 더미 데이터
  const imgSrc = "./img/weather/";
  const weatherData = [
    { title: "월", img: "sunny.png", temp: "12", wave: "1.2", wind: "북동-3" },
    { title: "화", img: "rain.png", temp: "18", wave: "0.6", wind: "남서-4" },
    { title: "수", img: "wind.png", temp: "15", wave: "0.3", wind: "북-1" },
    { title: "목", img: "sunny.png", temp: "14", wave: "0.5", wind: "동-2" },
    { title: "금", img: "cloud.png", temp: "19", wave: "1.1", wind: "서-5" },
    { title: "토", img: "rain.png", temp: "22", wave: "0.7", wind: "동-2" }
  ];
  //검색 모달 클릭여부 state
  const [open, setOpen] = useState(false);
  return (
    <WeatherContainer>
      {open ?
        <WeatherSearch
          open={open}
          setOpen={setOpen}
          setSpotTitle={setSpotTitle}
        />
      : null}
      <WeatherBox>
        <label>
          {title}
          <img
            src="./img/location/pin.png"
            className="inner-img"
            alt="..."
            onClick={() => setOpen((current) => !current)}
          />
        </label>
      </WeatherBox>
      <Wrapper>
        <LeftBox className="box-border">
          <div className="left-inner">
            <InnerLabel className="title">3월 3일 (일)</InnerLabel>
          </div>
          <div className="left-inner around">
            <InnerImg src="./img/weather/storm.png" alt="..." />
            <InnerLabel size={"3rem"}>23℃</InnerLabel>
          </div>
          <div className="left-inner around">
            <div className="flex">
              <InnerImg src="./img/weather/wave.png" size={"3em"} alt="..." />
              <InnerLabel size={"1.7rem"}>1.2m</InnerLabel>
            </div>
            <div className="flex">
              <InnerImg src="./img/weather/wind.png" size={"3em"} alt="..." />
              <InnerLabel size={"1.7rem"}>북동-3m/s</InnerLabel>
            </div>
          </div>
        </LeftBox>
        <RightBox className="box-border">
          {weatherData && weatherData.map((weather, index) => {
            return (
              <Days key={index}>
                <div><label>3월 {4 + index}일 ({weather.title})</label></div>
                <div><img src={imgSrc + weather.img} alt={weather.img + "-" + index} /></div>
                <div><label>{weather.temp}℃</label></div>
                <div><label>{weather.wave}m</label></div>
                <div><label>{weather.wind}m/s</label></div>
              </Days>
            )
          })}
        </RightBox>
      </Wrapper>
    </WeatherContainer>
  )
}

export default Weather;