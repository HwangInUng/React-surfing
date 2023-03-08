import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import Bt from "../../common/Bt";
import Input from "../../common/Input";
import ProfileImage from "../../common/ProfileImage";

const MenuContainer = styled.div`
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

function Menu() {
  //Input value state
  const [menuName, setMenuName] = useState("");
  const [menuPrice, setMenuPrice] = useState("");
  const [menuDesc, setMenuDesc] = useState("");
  //상품 대표 이미지
  const [file, setFile] = useState([]);

  //onChange 이벤트 핸들러
  const handleMenuName = (e) => {
    setMenuName(e.target.value);
  }
  const handleMenuPrice = (e) => {
    setMenuPrice(e.target.value);
  }
  const handleMenuDesc = (e) => {
    setMenuDesc(e.target.value);
  }

  //상품 등록 요청 함수
  const registMenu = () => {
    let formData = new FormData();
    formData.append("shopIdx", 7);
    formData.append("menuName", menuName);
    formData.append("menuPrice", menuPrice);
    formData.append("menuDesc", menuDesc);
    formData.append("image", file);

    //비동기 요청
    axios.post('/api/menu', formData, {
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
    <MenuContainer>
      <InputContainer>
      <ProfileImage setFile={setFile}/>
        <Input
          type="text"
          placeholder="상품명 입력"
          name="menuName"
          value={menuName}
          onChange={handleMenuName}
        />
        <Input
          type="text"
          placeholder="가격 입력(ex: 2만원 = 20000)"
          name="menuPrice"
          value={menuPrice}
          onChange={handleMenuPrice}
        />
        <Input
          type="text"
          placeholder="상품설명 입력(50자 이내로 입력해주세요.)"
          name="menuDesc"
          value={menuDesc}
          onChange={handleMenuDesc}
        />
        <Bt type="button" btName="등록하기" onClick={registMenu} />
      </InputContainer>
    </MenuContainer>
  );
}

export default Menu;