import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "../../../common/Loading";
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
  margin: 0px 3px;
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

function Weather() {
  // 이미지 변수
  const imgSrc = "./img/weather/";
  const ext = ".png";

  // 당일 이후 주간 날씨 데이터 state
  const [weatherData, setWeatherData] = useState([]);

  // 로드 시 api에 요청할 지역 state
  const [selectSpot, setSelectSpot] = useState({
    spotIdx: 12,
    localName: "강원도",
    townName: "양양군",
    spotName: "강현면",
    spotLati: 38.147243,
    spotLongi: 128.6098,
  });
  
  const getWeather = async () => {
    const response = await axios.post("/api/client/weather", selectSpot);
    console.log(response.data);
    handleWeatherData(response.data);
  }
  //로드 시 기본설정 지역에 대한 기상정보 획득
  useEffect(() => {
    getWeather();
  }, [selectSpot]);

  //타이틀에 출력할 조합 변수
  const title = selectSpot.localName + " " + selectSpot.townName + " " + selectSpot.spotName;

  //API 반환결과 가공 함수
  const handleWeatherData = (weatherList) => {
    let resultList = [];
    //당일 기준 주간 시작요일 판단을 위한 변수
    let preDay = 0;
    weatherList.map((weather, index) => {
      // 당일에 해당하는 요일 세팅
      if (index === 0) {
        preDay = Number(weather.day);
      } else { //당일을 기준으로 1일씩 증가
        if (preDay === 7) { //당일이 토요일인 경우 일요일로 초기화
          preDay = 1;
        }
        preDay = preDay + 1;
      }
      weather.day = handleDay(preDay);

      // 기상상태 세팅
      weather.sky = handleSky(Number(weather.sky), Number(weather.pty));

      // 풍향 세팅
      weather.vec = handleWindDirection(Number(weather.vec));

      resultList.push(weather);
    });
    setWeatherData(resultList);
  }
  const handleDay = (day) => {
    let result = 0;
    switch (day) {
      case 1:
        result = "일요일";
        break;
      case 2:
        result = "월요일";
        break;
      case 3:
        result = "화요일";
        break;
      case 4:
        result = "수요일";
        break;
      case 5:
        result = "목요일";
        break;
      case 6:
        result = "금요일";
        break;
      case 7:
        result = "토요일";
        break;
    }
    return result;
  }
  const handleSky = (sky, pty) => {
    let result = "";
    if (sky <= 5 && pty === 0) {
      result = "sunny";
    } else if ((sky >= 6 && sky <= 8) && pty === 0) {
      result = "cloud";
    } else if (sky > 8 && pty === 0) {
      result = "cloud";
    } else if (pty > 0 && pty < 3) {
      result = "rain";
    } else if (pty === 3) {
      result = "snow";
    }
    return result;
  }
  const handleWindDirection = (vec) => {
    let result = "";
    if (vec >= 0 && vec <= 45) {
      result = "북동";
    } else if (vec > 45 && vec <= 90) {
      result = "동";
    } else if (vec > 90 && vec <= 135) {
      result = "남동";
    } else if (vec > 135 && vec <= 180) {
      result = "남";
    } else if (vec > 180 && vec <= 225) {
      result = "남서";
    } else if (vec > 225 && vec <= 270) {
      result = "서";
    } else if (vec > 270 && vec <= 315) {
      result = "북서";
    } else if (vec > 315 && vec <= 359) {
      result = "북";
    }
    return result;
  }
  //검색 모달 클릭여부 state
  const [open, setOpen] = useState(false);
  return (
    <WeatherContainer>
      {open ?
        <WeatherSearch
          open={open}
          setOpen={setOpen}
          setSelectSpot={setSelectSpot}
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
        {weatherData && weatherData.map((weather, index) => {
          return (
            <LeftBox className="box-border" key={index}>
              <div className="left-inner">
                <InnerLabel className="title">{weather.day}</InnerLabel>
              </div>
              <div className="left-inner around">
                <InnerImg src={imgSrc + weather.sky + ext} alt={weather.sky + ext} />
                <InnerLabel size={"3rem"}>{weather.tmp + "℃"}</InnerLabel>
              </div>
              <div className="left-inner around">
                <div className="flex">
                  <InnerImg src="./img/weather/wave.png" size={"3em"} alt="..." />
                  <InnerLabel size={"1.5rem"}>{weather.wav + "m"}</InnerLabel>
                </div>
                <div className="flex">
                  <InnerImg src="./img/weather/wind.png" size={"3em"} alt="..." />
                  <InnerLabel size={"1.5rem"}>{weather.vec + " " + weather.wsd + "m/s"}</InnerLabel>
                </div>
              </div>
            </LeftBox>
          )
        })}
      </Wrapper>
    </WeatherContainer>
  )
}

export default Weather;