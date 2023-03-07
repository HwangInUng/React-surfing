import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 14px;
  background: ${props => props.color ? props.color : '#7ca2eb'};
  color: white;
`;

function Bt(props) {
  return (
    <Button color={props.color}
      onClick={props.onClick}
      type="button"
    >
      {props.btName}
    </Button>
  );
}

export default Bt;