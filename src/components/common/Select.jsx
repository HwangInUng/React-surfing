import styled from "styled-components";

const RegistSelect = styled.select`
  width: 40%;
  height: 40px;
  padding: 10px;
  margin-right: 5px;
  margin-bottom: 20px;
  border: 1px solid lightGray;
  border-radius: 10px;

  outline: none;

  :focus{
    box-shadow: 0px 0px 5px #7ca2eb;
    background: none;
    background-position: 2%;
  }
`;

function Select(props) {
  return (
    <RegistSelect onChange={props.onChange}>
      <option>선택하세요.</option>
      {props.data && props.data.map((data, index) => {
        return (
          <option key={index} value={data.value}>{data.option}</option>
        )
      })}
    </RegistSelect>
  );
}

export default Select;