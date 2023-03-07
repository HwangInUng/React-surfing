import { Form, Stack } from "react-bootstrap";
import Bt from "../common/Bt";
import FormSet from "./FormSet";

function JoinForm(props) {
  return (
    <Form>
      <FormSet text="ID" ph="아이디를 입력하세요." type="text"></FormSet>
      <FormSet text="PASS" ph="패스워드를 입력하세요." type="password"></FormSet>
      <FormSet text="PASS확인" ph="패스워드를 확인해주세요." type="password"></FormSet>
      <Stack className="col-md-10 mx-auto mt-5" gap={2}>
        <Bt btName="회원등록" onClick={props.join} />
        <Bt btName="뒤로가기" onClick={props.switchForm} color="#636363" />
      </Stack>
    </Form >
  );
}

export default JoinForm;