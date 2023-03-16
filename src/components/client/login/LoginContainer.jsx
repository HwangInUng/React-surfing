import styled from "styled-components";
import Input from "../../common/Input";
import Bt from "../../common/Bt";
import { useState } from "react";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .wrapper {
    width: 100%;
    border-bottom: 1px solid #7ca5eb;
  }
  .input-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .login-a{
      text-decoration: none;
      color: #7e8080;

      &:hover{
        color: #7ca2eb;
      }
    }
  }
  .evenly{
    margin: 1rem 0px;
    justify-content: space-evenly;
  }
`;

function LoginContainer() {
  const [memberId, setMemberId] = useState("");
  const [memberPass, setMemberPass] = useState("");

  const handleLogin = async () => {
    if(memberId !== "" && memberPass !== ""){
      await axios.post('/api/client/user', {
        memberId: memberId,
        memberPass: memberPass
      }).then((response) => {
        alert("로그인 성공");
        console.log(response.data);
        localStorage.setItem("member", response.data);

        window.location.href="/";
      }).catch((err) => {
        alert(err.response.data.detail);
      });
    } else{
      alert("ID 혹은 비밀번호를 입력하세요.");
    }
  }
  return (
    <Container>
      <div className="wrapper">
        <div className="input-box">
          <Input
            type="text"
            placeholder="ID입력"
            value={memberId}
            onChange={(e) => setMemberId(e.target.value)}
            width="50%"
          />
        </div>
        <div className="input-box">
          <Input
            type="password"
            placeholder="비밀번호 입력"
            value={memberPass}
            onChange={(e) => setMemberPass(e.target.value)}
            width="50%"
          />
        </div>
        <div className="input-box">
          <Bt
            btName="로그인"
            width="30%"
            onClick={handleLogin}
          />
        </div>
        <div className="input-box evenly">
          <span>
            <a href="/join"className="login-a">회원가입</a>
          </span>
          <span>
            <a href="#"className="login-a">ID찾기</a>
            /
            <a href="#"className="login-a">비밀번호 찾기</a>
          </span>
        </div>
      </div>
    </Container>
  )
}

export default LoginContainer;