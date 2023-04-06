import Topbar from "../main/topbar/Topbar"
import Footer from "../../client/main/Footer"
import ClientContainer from "../../common/ClientContainer";
import styled from "styled-components";
import Input from "../../common/Input";
import { useState } from "react";
import Select from "../../common/Select";
import Bt from "../../common/Bt";
import { accessClient } from "../../../App"
import { useNavigate } from "react-router-dom";

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
  &.center{
    justify-content: center;
  }
`;

function RegistShop() {
  const navigate = useNavigate();
  //매장관리 프로그램 목록
  const tools = ["네이버 예약", "클록", "기타"];
  const [registShop, setRegistShop] = useState({
    shopName: "",
    shopArea: "",
    shopTown: "",
    memberName: "",
    position: "",
    shopCall: "",
    shopTool: "",
  });
  const handleRegistShop = () => {
    for (let info in registShop) {
      if (registShop[info] === "") {
        alert("누락한 입력정보가 있습니다.");
        return;
      }
    }

    accessClient.post(`${process.env.REACT_APP_REQUEST_URL}/api/client/token/shop`, registShop)
      .then((res) => {
        alert(res.data.msg);
        navigate("/my");
      })
      .catch((err) => {
        alert(err.response.data.detail);
        window.history.back()
      });
  }
  return (
    <>
      <Topbar />
      <ClientContainer>
        {/* 매장명 */}
        <InputBox>
          <Input
            type="text"
            placeholder="매장명을 입력해주세요."
            value={registShop.shopName}
            onChange={(e) => setRegistShop({
              ...registShop,
              shopName: e.target.value
            })}
          />
        </InputBox>
        {/* /.매장명 */}

        {/* 매장 위치 */}
        <InputBox>
          <Input
            type="text"
            placeholder="광역시, 도를 입력하세요."
            value={registShop.shopArea}
            onChange={(e) => setRegistShop({
              ...registShop,
              shopArea: e.target.value
            })}
            width="40%"
          />
          <Input
            type="text"
            placeholder="시, 군, 구를 입력해주세요."
            value={registShop.shopTown}
            onChange={(e) => setRegistShop({
              ...registShop,
              shopTown: e.target.value
            })}
            width="40%"
          />
        </InputBox>
        {/* /.매장 위치 */}

        {/* 문의자 정보 */}
        <InputBox>
          <Input
            type="text"
            placeholder="문의자명을 입력해주세요."
            value={registShop.memberName}
            onChange={(e) => setRegistShop({
              ...registShop,
              memberName: e.target.value
            })}
          />
        </InputBox>
        <InputBox>
          <Input
            type="text"
            placeholder="문의자의 직급을 입력해주세요."
            value={registShop.position}
            onChange={(e) => setRegistShop({
              ...registShop,
              position: e.target.value
            })}
          />
        </InputBox>
        {/* /.문의자 정보 */}

        {/* 매장전화번호 */}
        <InputBox>
          <Input
            type="text"
            placeholder="매장번호를 '-'을 제외하고 입력해주세요."
            value={registShop.shopCall}
            onChange={(e) => setRegistShop({
              ...registShop,
              shopCall: e.target.value
            })}
          />
        </InputBox>
        {/* /.매장전화번호 */}

        {/* 매장관리 프로그램 */}
        <InputBox>
          <Select
            data={tools}
            onChange={(value) => setRegistShop({
              ...registShop,
              shopTool: value
            })}
          />
        </InputBox>
        {/* /.매장관리 프로그램 */}

        <InputBox className="center">
          <Bt
            btName="신청하기"
            color="#7ca2eb"
            onClick={handleRegistShop}
          />
          <Bt
            btName="뒤로가기"
            onClick={() => window.history.back()}
            color="#f0a779"
          />
        </InputBox>
      </ClientContainer>
      <Footer />
    </>
  )
}

export default RegistShop;