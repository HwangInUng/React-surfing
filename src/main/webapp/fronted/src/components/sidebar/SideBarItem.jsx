import { useState } from "react";
import styled from "styled-components";

/*
  커서는 포인터로 지정하며 모서리는 둥글게 구성
  hover를 통해 마우스 오버 시 시각화
  active도 동일하게 색상 적용
*/
const SideItem = styled.li`
  font-size: 1rem;
  color: #555;
  padding: 5px;
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  
  &:link{
    transition: 0.5s;
    text-decoration: none;
  }

  &.active,
  &:hover {
    background-color: rgb(212, 209, 235);
  }
`;

function SideBarItem({icon, title}) {
  const [clicked, setClicked] = useState(false); //Active 활성화 판단 state
  const onClick = () => { //클릭 시 active효과 처리를 위한 함수
    //현재 논리값 반전
    setClicked((current) => !current);
  }
  return <SideItem className={clicked ? "active" : null} onClick={onClick}>
          {icon}
          {title}
          </SideItem>
}

export default SideBarItem;