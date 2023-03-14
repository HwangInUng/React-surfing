import styled from "styled-components";
import ClientContainer from "../../common/ClientContainer";
import Footer from "../main/Footer";
import Topbar from "../main/topbar/Topbar";
import Input from "../../common/Input";
import DaumPost from "../../common/DaumPost";
import { useState } from "react";
import { useEffect } from "react";
import Bt from "../../common/Bt";
import axios from "axios";

const Wrapper = styled.div`

`;

const InputBox = styled.div`
  width: 60%;
  margin: auto;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .title{
    font-size: 2rem;
    font-weight: bold;
    border-bottom: 2px solid #7ca2eb;
  }
`;

const InfoLabel = styled.label`
  font-size: 0.8rem;
  color: ${props => props.color};
`;

const ImageLabel = styled.label`
  border-radius: 10px;
  padding: 10px;
  font-size: 1rem;
  background: #7ca2eb;
  color: white;
  cursor: pointer;
  
  > input {
    display: none;
  }
`;


function ClientJoin() {
  // 정규식 및 유효성 체크 성공 여부에 따른 info 컬러 변수---------------------------------------------
  const trueColor = "#7ca2eb";
  const falseColor = "#f0a779";

  // 회원가입 서버 요청 시 전달할 회원 정보------------------------------------------------------------
  const [memberId, setMemberId] = useState("");
  const [memberPass, setMemberPass] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [addressObj, setAddressObj] = useState({
    areaAddress: "",
    townAddress: "",
  });
  const [locationObj, setLocationObj] = useState({
    locationX: "",
    locationY: ""
  });
  const [email, setEmail] = useState("");

  /*정규식 및 유효성 검증을 위한 state-----------------------------------------------------------------
    -idCheck, passCheck : 아이디 및 비밀번호 정규식 통과 여부
    -idInfo, passInfo : 정규식 여부에 따른 안내 메세지
    -confirmPass : 비밀번호 재확인 state
  */
  const [idCheck, setIdCheck] = useState("");
  const [passCheck, setPassCheck] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [idInfo, setIdInfo] = useState("");
  const [passInfo, setPassInfo] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [emailCode, setEmailCode] = useState("");

  // ID 입력에 따른 정규식 검증------------------------------------------------------------------------
  const handleMemberId = (e) => {
    setMemberId(e.target.value);
    const idRegExp = /^[a-zA-z0-9]{4,12}$/;

    if (!idRegExp.test(memberId)) {
      setIdInfo("4-12자 이내로 영소문자와 숫자만 입력해주세요!");
      setIdCheck(false);
    } else {
      setIdInfo("사용가능한 ID입니다.");
      setIdCheck(true);
    }
  }

  // 패스워드 정규식 및 일치여부 검사-------------------------------------------------------------------
  const handleMemberPass = (e) => {
    const currentPass = e.target.value;
    const passRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

    if (!passRegExp.test(currentPass)) {
      setPassInfo("숫자/영문자/특수문자 조합으로 8~15자 이내로 입력해주세요!");
      setPassCheck(false);
    } else {
      setPassInfo("안전한 비밀번호입니다.");
      setPassCheck(true);
    }
    setMemberPass(currentPass);
  }

  // 비밀번호 입력 일치 여부 검사-----------------------------------------------------------------------
  const handleConfirmPass = (e) => {
    const currentConfirm = e.target.value;

    if (memberPass !== currentConfirm) {
      setPassInfo("비밀번호가 일치하지 않습니다!");
      setPassCheck(false);
    } else {
      console.log(currentConfirm);
      setPassInfo("비밀번호가 일치합니다.");
      setPassCheck(true);
    }
    setConfirmPass(currentConfirm);
  }
  
  // 인증 이메일 발송 요청------------------------------------------------------------------------------
  const sendEmail = async () => {
    const response = await axios.get('/api/client/email?email=' + email);
    alert(response.data.msg);
  }

  // 인증번호 확인 요청---------------------------------------------------------------------------------
  const checkEmail = async () => {
    const response = await axios.get('/api/client/email-auth?userCode=' + emailCode);
    alert(response.data.msg);
    if(response.data.code === 1){
      setEmailCheck(true);
    }
  }
  return (
    <>
      <Topbar />
      <ClientContainer>
        <InputBox>
          <span className="title">회원가입</span>
        </InputBox>

        {/* ID 입력 영역 */}
        <InputBox>
          <Input
            placeholder="사용하실 아이디를 입력하세요."
            value={memberId}
            onChange={handleMemberId}
            width="70%"
            mb="0px"
          />
          <ImageLabel>
            이미지등록
            <input
              type="file"
              onChange={(e) => setProfileImage(e.target.files[0])}
            />
          </ImageLabel>
        </InputBox>
        <InputBox>
          <InfoLabel color={idCheck ? trueColor : falseColor}>
            {idInfo}
          </InfoLabel>
        </InputBox>
        {/* /.ID 입력 영역 */}

        {/* 비밀번호 입력 영역 */}
        <InputBox>
          <Input
            type="password"
            placeholder="사용하실 비밀번호를 입력하세요."
            value={memberPass}
            onChange={handleMemberPass}
            width="70%"
            mb="0px"
          />
        </InputBox>
        <InputBox>
          <Input
            type="password"
            placeholder="비밀번호를 한번 더 입력하세요."
            value={confirmPass}
            onChange={handleConfirmPass}
            width="70%"
            mb="0px"
          />
        </InputBox>
        <InputBox color="#7ca2eb">
          <InfoLabel color={passCheck ? trueColor : falseColor}>
            {passInfo}
          </InfoLabel>
        </InputBox>
        {/* /.비밀번호 입력 영역 */}

        {/* 주소 입력 영역 */}
        <InputBox>
          <Input
            type="text"
            placeholder="지역주소"
            value={addressObj.areaAddress}
            readOnly={true}
            name="localAddress"
            mb="0px"
          />
          <DaumPost
            setAddressObj={setAddressObj}
            setLocationObj={setLocationObj}
          />
        </InputBox>
        <InputBox>
          <Input
            type="text"
            placeholder="상세주소"
            value={addressObj.townAddress}
            name="detailAddress"
            readOnly={true}
          />
        </InputBox>
        {/* /.주소 입력 영역 */}

        {/* 이메일 인증 영역 */}
        <InputBox>
          <Input
            type="text"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            mb="0px"
            dis={emailCheck}
          />
          <Bt
            btName="전송"
            onClick={sendEmail}
            dis={emailCheck}
            color={emailCheck ? "#7e8080" : trueColor}
          />
        </InputBox>
        <InputBox>
          <Input
            type="text"
            placeholder="인증번호 입력"
            value={emailCode}
            onChange={(e) => setEmailCode(e.target.value)}
            mb="0px"
            dis={emailCheck}
          />
          <Bt
            btName="인증하기"
            onClick={checkEmail}
            dis={emailCheck}
            color={emailCheck ? "#7e8080" : trueColor}
          />
        </InputBox>
        {/* /.이메일 인증 영역 */}

      </ClientContainer>
      <Footer />
    </>
  )
}

export default ClientJoin;