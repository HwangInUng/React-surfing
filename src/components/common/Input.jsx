import { useState } from "react";
import styled from "styled-components";

const RegistInput = styled.input`
  width: 80%;
  height: 40px;
  padding: 10px;
  margin-right: 5px;
  margin-bottom: 20px;
  border: 1px solid lightGray;
  border-radius: 10px;

  * {
    transition: all ease-in 0.5s;
  }

  outline: none;

  :focus{
    box-shadow: 0px 0px 5px #7ca2eb;
    background: none;
    background-position: 2%;
  }
`;

function Input(props) {
  // 숫자입력값에 한하여 자릿수 구분을 위한 state
  // const [num, setNum] = useState(0);

  // ,를 입력하기 위한 함수
  // const inputPriceFormat = (inputValue) => {
  //   const comma = (inputValue) => {
  //     inputValue = String(inputValue);
  //     return inputValue.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
  //   };
  //   const uncomma = (inputValue) => {
  //     inputValue = String(inputValue);
  //     return inputValue.replace(/[^\d]+/g, '');
  //   }
  //   return comma(uncomma(inputValue));
  // }

  return <RegistInput
    type={props.type}
    placeholder={props.placeholder}
    name={props.name}
    value={props.value}
    onChange={props.onChange}
    // readOnly가 적용된 태그에 한해서만 적용
    readOnly={props.readOnly !== undefined ? props.readOnly : null}
  />
}

export default Input;