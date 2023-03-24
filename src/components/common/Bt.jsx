import styled from "styled-components";

const Button = styled.button`
  width: ${props => props.width || null};
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: ${props => props.font || '1rem'};
  font-weight: 500;
  background: ${props => props.color || '#7ca2eb'};
  opacity: 0.7;
  color: white;
  margin-right: 5px;

  &:hover{
    opacity: 1;
    transform: scale(1.02);
    transition: 0.7s;
  }
`;

function Bt(props) {
  return (
    <Button color={props.color}
      onClick={props.onClick}
      type="button"
      width={props.width}
      disabled={props.dis}
      font={props.font}
    >
      {props.btName}
    </Button>
  );
}

export default Bt;