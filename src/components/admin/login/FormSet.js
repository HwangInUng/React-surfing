import { Form } from "react-bootstrap";

function FormSet(props) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{props.text}</Form.Label>
      <Form.Control placeholder={props.ph} type={props.type}></Form.Control>
    </Form.Group>
  );
}

export default FormSet;