import styled from "styled-components";

const Button = styled.button`
  width: ${props => props.width || null};
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 1rem;
  background: ${props => props.color || '#7ca2eb'};
  color: white;
`;

function Bt(props) {
  return (
    <Button color={props.color}
      onClick={props.onClick}
      type="button"
      width={props.width}
      disabled={props.dis}
    >
      {props.btName}
    </Button>
  );
}

export default Bt;