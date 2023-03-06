import { Form, Stack } from "react-bootstrap";
import Bt from "../common/Bt";
import FormSet from "./FormSet";

function LoginForm(props) {
  return (
    <Form>
      <FormSet text="ID" ph="아이디를 입력하세요." type="text"></FormSet>
      <FormSet text="PASS" ph="비밀번호를 입력하세요." type="password"></FormSet>
      <Stack className="col-md-10 mx-auto mt-5" gap={2}>
        <Bt btName="로그인" onClick={props.login} color="dark"></Bt>
        <Bt btName="회원가입" onClick={props.switchForm} color="secondary"></Bt>
      </Stack>
    </Form>
  );
}

export default LoginForm;