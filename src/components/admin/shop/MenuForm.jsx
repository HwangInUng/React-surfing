import { useState } from "react";
import styled from "styled-components";
import Bt from "../../common/Bt";
import Input from "../../common/Input";
import ProfileImage from "../../common/ProfileImage";
import axios from "axios";

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

function MenuForm({ shopIdx, setRegist }) {
  //Input value state
  const [menuName, setMenuName] = useState("");
  const [menuPrice, setMenuPrice] = useState("");
  const [menuDesc, setMenuDesc] = useState("");
  //상품 대표 이미지
  const [file, setFile] = useState([]);

  //상품 등록 요청 함수
  const registMenu = () => {
    if (window.confirm("등록하시겠습니까?")) {
      let formData = new FormData();

      formData.append("shopIdx", shopIdx);
      formData.append("menuName", menuName);
      formData.append("menuPrice", menuPrice);
      formData.append("menuDesc", menuDesc);
      console.log(file);
      formData.append("image", file);

      //비동기 요청
      axios.post(`${process.env.REACT_APP_REQUEST_URL}/api/menu`, formData, {
        //multipart 데이터 전달 시 설정
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        alert(response.data.msg);
        setRegist(false);
      }).catch((error) => {
        alert(error.response.data.detail);
      }).finally(() => setFile(""));
    }
  }
  return (
    <InputContainer>
      <ProfileImage setFile={setFile} />
      <Input
        type="text"
        placeholder="상품명 입력"
        name="menuName"
        value={menuName}
        onChange={(e) => setMenuName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="가격 입력(ex: 2만원 = 20000)"
        name="menuPrice"
        value={menuPrice}
        onChange={(e) => setMenuPrice(e.target.value)}
      />
      <Input
        type="text"
        placeholder="상품설명 입력(50자 이내로 입력해주세요.)"
        name="menuDesc"
        value={menuDesc}
        onChange={(e) => setMenuDesc(e.target.value)}
      />
      <Bt type="button" btName="등록하기" onClick={registMenu} />
    </InputContainer>
  );
}

export default MenuForm;