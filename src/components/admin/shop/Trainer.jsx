import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import Bt from "../../common/Bt";
import Input from "../../common/Input";
import ProfileImage from "../../common/ProfileImage";
import Select from "../../common/Select";

const TrainerContainer = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  padding-top: 20px;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 15px;
  text-align: 

  -webkit-box-shadow: 0px 0px 5px -1px #000000; 
  box-shadow: 0px 0px 5px -1px #000000;
`;

function Trainer() {
  //Input value state
  const [trainerName, setTrainerName] = useState("");
  const [trainerCareer, setTrainerCareer] = useState("");
  //select value state
  const [trainerType, setTrainerType] = useState("");
  const [trainerBoard, setTrainerBoard] = useState("");
  //강사 프로필 이미지
  const [file, setFile] = useState("");

  //유형 및 전문보드 선택 데이터 객체
  const typeData = [
    { option: "퍼포먼스", value: "퍼포먼스" },
    { option: "클래식", value: "클래식" },
    { option: "올라운드", value: "올라운드" },
  ];
  const boardData = [
    { option: "롱보드", value: "롱보드" },
    { option: "숏보드", value: "숏보드" },
    { option: "미드렝스", value: "미드렝스" },
  ];

  //onChange 이벤트 핸들러
  const handleTrainerName = (e) => {
    setTrainerName(e.target.value);
  }
  const handleTrainerCareer = (e) => {
    setTrainerCareer(e.target.value);
  }
  const handleTrainerType = (e) => {
    console.log(e.target.value);
    setTrainerType(e.target.value);
  }
  const handleTrainerBoard = (e) => {
    console.log(e.target.value);
    setTrainerBoard(e.target.value);
  }

  //강사 등록 요청 함수
  const registTrainer = () => {
    let formData = new FormData();
    formData.append("shopIdx", 7);
    formData.append("trainerName", trainerName);
    formData.append("trainerCareer", trainerCareer);
    formData.append("trainerType", trainerType);
    formData.append("trainerBoard", trainerBoard);
    formData.append("profile", file);

    //비동기 요청
    axios.post('/api/trainer', formData, {
      //multipart 데이터 전달 시 설정
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((response) => {
      alert(response.data.msg);
    }).catch((error) => {
      alert(error);
    }).finally(() => setFile(""));
  }
  return (
    <TrainerContainer>
      <InputContainer>
      <ProfileImage setFile={setFile}/>
        <Input
          type="text"
          placeholder="강사명 입력"
          name="trainerName"
          value={trainerName}
          onChange={handleTrainerName}
        />
        <Input
          type="number"
          placeholder="경력 입력(ex: 2년 = 2)"
          name="trainerCareer"
          value={trainerCareer}
          onChange={handleTrainerCareer}
        />
        <div style={{ width: "80%" }}>
          <Select data={typeData} onChange={handleTrainerType} />
          <Select data={boardData} onChange={handleTrainerBoard} />
        </div>
        <Bt type="button" btName="등록하기" onClick={registTrainer} />
      </InputContainer>
    </TrainerContainer>
  );
}

export default Trainer;