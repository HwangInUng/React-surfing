import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import Bt from "../../common/Bt";
import DaumPost from "../../common/DaumPost";
import Images from "../../common/Images";
import Input from "../../common/Input";

const InputContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 15px;
  text-align: 

  -webkit-box-shadow: 0px 0px 5px -1px #000000; 
  box-shadow: 0px 0px 5px -1px #000000;
`;

function Shop({ shop }) {
  //매장의 기본정보 state
  const [shopName, setShopName] = useState(shop.shopName);
  const [shopCall, setShopCall] = useState(shop.shopCall);
  const [shopStart, setShopStart] = useState(shop.shopStart);
  const [shopEnd, setShopEnd] = useState(shop.shopEnd);
  const [changeImg, setChangeImg] = useState(false);

  //매장의 주소 state
  const [addressObj, setAddressObj] = useState({
    areaAddress: shop.shopArea,
    townAddress: shop.shopTown
  });

  //좌표 state
  const [locationObj, setLocationObj] = useState({
    locationX: shop.shopLati,
    locationY: shop.shopLongi
  });

  //매장 대표이미지 state : images.jsx의 선택이미지가 달라질 경우에 상태 갱신
  const [files, setFiles] = useState([]);

  //매장등록 요청 함수
  const updateShop = () => {
    if (window.confirm("수정하시겠습니까?")) {
      //파라미터 세팅
      let formData = new FormData();
      formData.append("shopIdx", shop.shopIdx);
      formData.append("businessIdx", localStorage.getItem("businessIdx"));
      formData.append("shopArea", addressObj.areaAddress);
      formData.append("shopTown", addressObj.townAddress);
      formData.append("shopLati", locationObj.locationY);
      formData.append("shopLongi", locationObj.locationX);
      formData.append("shopName", shopName);
      formData.append("shopCall", shopCall);
      formData.append("shopStart", shopStart);
      formData.append("shopEnd", shopEnd);

      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }

      //비동기 요청
      axios.post('/api/shop-edit', formData, {
        //multipart 데이터 전달 시 설정
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        alert(response.data.msg);
        window.location.href = "/admin/shop";
      }).catch((error) => {
        alert(error);
      }).finally(() => setFiles([]));
    }
  }
  return (
    <InputContainer>
      <div style={{ width: "80%" }}>
        <Input
          type="text"
          placeholder="지역주소"
          name="shopArea"
          // 도, 시, 군, 구에 대한 주소 출력
          value={addressObj.areaAddress}
          readOnly={true}
        />
        {/* Daum Post 컴포넌트의 결과를 적용할 state 함수 전달 */}
        <DaumPost setAddressObj={setAddressObj} setLocationObj={setLocationObj} />
        <Input
          type="text"
          placeholder="상세주소"
          name="shopTown"
          // 지역주소를 제외한 상세주소 출력
          value={addressObj.townAddress}
          readOnly={true}
        />
        <input type="hidden" name="shopLati" value={locationObj.locationY} />
        <input type="hidden" name="shopLongi" value={locationObj.locationX} />
      </div>
      <Input
        type="text"
        placeholder="매장명"
        name="shopName"
        value={shopName}
        onChange={(e) => setShopName(e.target.value)}
      />
      <Input
        type="number"
        placeholder="매장전화번호"
        name="shopCall"
        value={shopCall}
        onChange={(e) => setShopCall(e.target.value)}
      />
      <Input
        type="number"
        placeholder="24시간 기준으로 작성해주세요.(ex: 오전 8시 = 08)"
        name="shopStart"
        value={shopStart}
        onChange={(e) => setShopStart(e.target.value)}
      />
      <Input
        type="number"
        placeholder="24시간 기준으로 작성해주세요.(ex: 오후 8시 = 20)"
        name="shopEnd"
        value={shopEnd}
        onChange={(e) => setShopEnd(e.target.value)}
      />
      {!changeImg ?
        <div>
          <label>이미지 재등록을 원하시면 클릭하세요. 재등록시 기존 이미지는 <b>삭제</b>됩니다.</label>
          <Bt btName="재등록" mb="5px" onClick={() => setChangeImg(true)} />
        </div>
        :
        <Images setFiles={setFiles} />
      }
      <Bt type="button" btName="수정하기" onClick={updateShop} />
    </InputContainer>
  )
}

export default Shop;