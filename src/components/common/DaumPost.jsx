import axios from "axios";
import Bt from '../common/Bt';
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";

function DaumPost(props) {
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
      //지역주소 제외 전체주소 치환
      fullAddress = fullAddress.replace(localAddress, '');
      //조건 판단 완료 후 지역 주소 및 상세주소 state 수정
      props.setAddressObj({
        areaAddress: localAddress,
        townAddress: fullAddress += (extraAddress !== '' ? `(${extraAddress})` : '')
      });
      //주소 검색이 완료된 후 결과를 매개변수로 전달
      getLocation(data.address);
    }
  }
  //클릭 시 발생할 이벤트
  const handleClick = () => {
    open({ onComplete: handleComplete });
  }
  /*
    -주소반환값을 기준으로 좌표를 획득하는 함수
    -address : daumpost에서 검색된 결과값 주소
  */
  const getLocation = (address) => {
    axios.get(`https://dapi.kakao.com/v2/local/search/address.json?query=${address}`, {
      headers: { Authorization: 'KakaoAK 8faf7efc559f55ed7edfa38a02432f2b' }, //Rest API Key 적용
    })
      .then(res => {
        const location = res.data.documents[0];
        props.setLocationObj({
          //검색해서 얻은 위치의 좌표를 획득
          locationX: location.address.x,
          locationY: location.address.y,
        })
      })
  }
  return (
    <Bt type="button"
      btName="주소찾기"
      onClick={handleClick}
    />
  );
}

export default DaumPost;