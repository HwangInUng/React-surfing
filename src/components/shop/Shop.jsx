import axios from "axios";
import { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";
import styled from "styled-components";
import Bt from "../common/Bt";

const ShopContainer = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  padding-top: 20px;
`;

const FormContainer = styled.div`
  width: 60%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 15px;
  text-align: 

  -webkit-box-shadow: 0px 0px 5px -1px #000000; 
  box-shadow: 0px 0px 5px -1px #000000;
`;

const Input = styled.input`
  width: 70%;
  height: 40px;
  padding: 10px;
  margin-right: 5px;
  margin-bottom: 20px;
  border: 1px solid lightGray;
  border-radius: 10px;

  * {
    transition: all ease-in 0.5s;
  }

  outline: none;

  :focus{
    border: 1px solid #7ca2eb;
    box-shadow: 0px 0px 5px #4643f496;
    background: none;
    background-position: 2%;
  }
`;


function Shop() {
  //input에 각각 입력될 지역주소 및 상세주소 state
  const [address, setAddress] = useState({
    areaAddress: '',
    townAddress: '',
  });
  //주소를 통한 좌표값을 입력받을 객체
  const [locationObj, setLocationObj] = useState({
    locationX: 0,
    locationY: 0,
  });
  //클릭 시 수행될 팝업 생성 함수
  const open = useDaumPostcodePopup(postcodeScriptUrl);
  //주소 선택 시 처리될 함수
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';
    let localAddress = data.sido + ' ' + data.sigungu;
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      //조건 판단 완료 후 지역 주소 및 상세주소 state 수정
      setAddress({
        areaAddress: localAddress,
        townAddress: fullAddress += (extraAddress !== '' ? `(${extraAddress})` : '')
      });
      getLocation(data.address);
    }
  }
  //클릭 시 발생할 이벤트
  const handleClick = () => {
    open({ onComplete: handleComplete });
  }

  //반복되는 input 태그에 대한 정보를 담을 객체
  const inputData = [
    { ph: "매장명", name: "shopName" },
    { ph: "매장번호", name: "shopCall" },
    { ph: "오픈시간", name: "shopStart" },
    { ph: "닫는시간", name: "shopEnd" }
  ];

  //주소반환값을 기준으로 좌표를 획득하는 함수
  const getLocation = (address) => {
    axios.get(`https://dapi.kakao.com/v2/local/search/address.json?query=${address}`, {
      headers: { Authorization: 'KakaoAK 8faf7efc559f55ed7edfa38a02432f2b' }, //Rest API Key 적용
    })
      .then(res => {
        const location = res.data.documents[0];
        setLocationObj({
          // si: location.address.region_1depth_name,
          // gu: location.address.region_2depth_name,
          // dong: location.address.region_3depth_name,
          //검색해서 얻은 위치의 좌표를 획득
          locationX: location.address.x,
          locationY: location.address.y,
        })
      })
  }
  return (
    <ShopContainer>
      <FormContainer>
        <div style={{ width: "70%" }}>
          <Input type="text"
            placeholder="지역주소"
            name="shopArea"
            value={address.areaAddress}
            readOnly
          />
          <Bt type="button"
            btName="주소찾기"
            onClick={handleClick}
            color="dark" />
          <Input type="text"
            placeholder="상세주소"
            name="shopTown"
            value={address.townAddress}
            readOnly
          />
          <input type="hidden" name="shopLati" value={locationObj.locationY} />
          <input type="hidden" name="shopLongi" value={locationObj.locationX} />
        </div>
        {inputData && inputData.map((input, index) => {
          return (
            <Input key={index} placeholder={input.ph} name={input.name} />
          )
        })}
      </FormContainer>
    </ShopContainer>
  );
}

export default Shop;