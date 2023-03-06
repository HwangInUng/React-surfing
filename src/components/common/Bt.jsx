import { Button } from "react-bootstrap";

function Bt(props) {
  return (
    <Button variant={props.color}
      onClick={props.onClick}
      type="button"
    >
      {props.btName}
    </Button>
  );
}

export default Bt;