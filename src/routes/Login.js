import { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import LoginForm from "../components/login/LoginForm"
import JoinForm from "../components/login/JoinForm"

//login 페이지
function Login() {
  const [loginFlag, setLoginFlag] = useState(true);
  const login = () => {
    window.location.href="/main"; //나중에 수정
    //로그인 처리에 대한 정보를 보내는 로직 작성
  }
  const join = () => {
    //회원가입 정보를 보내는 로직 작성
  }
  const switchForm = () => {
    setLoginFlag((current) => !current);
  }
  return (
    <Container>
      <Row className="vh-100 d-flex flex-column align-items-center justify-content-center">
        <Col md={3}>
          <Image src="img/logo.png" fluid></Image>
        </Col>
        <Col md={3} className="border rounded-4 p-3">
          {loginFlag ?
            <LoginForm login={login} switchForm={switchForm}></LoginForm> :
            <JoinForm join={join} switchForm={switchForm}></JoinForm>
          }
        </Col>
      </Row>
    </Container>
  );
}

export default Login;