import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import Bt from "../../common/Bt";
import Input from "../../common/Input";
import ProfileImage from "../../common/ProfileImage";
import Select from "../../common/Select";

const InputContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 15px;
  text-align: 

  -webkit-box-shadow: 0px 0px 5px -1px #000000; 
  box-shadow: 0px 0px 5px -1px #000000;
`;

function TrainerForm({ shopIdx, setRegist }) {
  //Input value state
  const [trainerName, setTrainerName] = useState("");
  const [trainerCareer, setTrainerCareer] = useState("");
  //select value state
  const [trainerType, setTrainerType] = useState("");
  const [trainerBoard, setTrainerBoard] = useState("");
  //강사 프로필 이미지
  const [file, setFile] = useState("");

  //유형 및 전문보드 선택 데이터 객체
  const typeData = ["퍼포먼스", "클래식", "올라운드"];
  const boardData = ["롱보드", "숏보드", "미드렝스"];

  //강사 등록 요청 함수
  const registTrainer = () => {
    if (window.confirm("등록하시겠습니까?")) {
      let formData = new FormData();
      formData.append("shopIdx", shopIdx);
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
        setRegist(false);
      }).catch((error) => {
        alert(error);
      }).finally(() => setFile(""));
    }
  }
  return (
    <InputContainer>
      <ProfileImage setFile={setFile} />
      <Input
        type="text"
        placeholder="강사명 입력"
        name="trainerName"
        value={trainerName}
        onChange={(e) => setTrainerName(e.target.value)}
      />
      <Input
        type="number"
        placeholder="경력 입력(ex: 2년 = 2)"
        name="trainerCareer"
        value={trainerCareer}
        onChange={(e) => setTrainerCareer(e.target.value)}
      />
      <div style={{ width: "80%" }}>
        <Select data={typeData} onChange={setTrainerType} />
        <Select data={boardData} onChange={setTrainerBoard} />
      </div>
      <Bt type="button" btName="등록하기" onClick={registTrainer} />
    </InputContainer>
  );
}

export default TrainerForm;