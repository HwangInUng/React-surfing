import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import Select from "../../../common/Select";

const SpotBt = styled.button`
  border: 1px solid #7ca2eb;
  border-radius: 10px;
  padding: 5px 10px;
  color: #7ca2eb;
  background: white;
  margin-right: 5px;

  &:hover{
    color: white;
    background: #7ca2eb;
  }
`;

function WeatherSearch({ open, setOpen, setSpotTitle }) {
  //로드시 최초로 요청될 지역리스트를 담을 state
  const [localList, setLocalList] = useState([]);
  //local 선택시 동네리스트를 담을 state
  const [townList, setTownList] = useState([]);
  //town 선택 시 조회할 spot을 담을 state
  const [spotList, setSpotList] = useState([]);
  //localselect에서 담은 local value를 저장할 state
  const [local, setLocal] = useState("");
  //townselect에서 담은 town value를 저장할 state
  const [town, setTown] = useState("");
  //spot을 담을 state
  const [spot, setSpot] = useState({
    spotIdx: 12,
    localName: "강원도",
    townName: "양양군",
    spotName: "강현면",
    spotLati: 38.147243,
    spotLongi: 128.6098,
  });
  useEffect(() => { //로드 시 localList 초기화
    const getLocalList = async () => {
      const response = await axios.get("/api/client/spot-local");
      setLocalList(response.data);
    }
    getLocalList();
  }, []);
  useEffect(() => { //local을 선택 시 townList 호출
    const getTownList = async () => {
      const response = await axios.get("/api/client/spot-town?localName=" + local);
      setTownList(response.data);
    }
    getTownList(local);
  }, [local]);
  useEffect(() => { //town을 선택 시 spotList 호출
    const getSpotList = async () => {
      const response = await axios.get("/api/client/spot?townName=" + town);
      setSpotList(response.data);
    }
    getSpotList();
  }, [town]);
  const getWeather = async (spot) => {
    const response = await axios.post("/api/client/weather", spot);
    console.log(response.data);
  }
  //spotBt 클릭 시 모달창이 닫히고, 해당 정보 전달
  const selectSpot = (spot) => {
    console.log(spot);
    setSpot(spot);
    setSpotTitle(spot);
    setOpen((current) => !current);
    getWeather(spot);
  }

  return (
    <>
      <Modal
        isOpen={open}
        appElement={document.getElementById('root')}
        style={{
          overlay: {
            boxShadow: "0px 0px 3px 0px #7ca2eb",
            padding: 10,
            borderRadius: 20,
            position: 'fixed',
            width: "50%",
            transition: "opacity 200ms ease-in-out",
            height: "50%",
            top: 100,
            left: "25%",
            backgroundColor: "white"
          },
          content: {
            borderRadius: 20,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }
        }}
      >
        <div>
          <Select data={localList} onChange={setLocal}></Select>
          <Select data={townList} onChange={setTown}></Select>
        </div>
        <div>
          {spotList && spotList.map((spot) => {
            return (
              <SpotBt
                key={spot.spotIdx}
                value={spot}
                onClick={() => selectSpot(spot)}
              >
                {spot.spotName}
              </SpotBt>
            )
          })}
        </div>
      </Modal>
    </>
  )
}

export default WeatherSearch;