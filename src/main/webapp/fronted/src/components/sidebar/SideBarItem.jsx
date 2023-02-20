import styled from "styled-components";

/*
  커서는 포인터로 지정하며 모서리는 둥글게 구성
  hover를 통해 마우스 오버 시 시각화
  active도 동일하게 색상 적용
*/
const SideItem = styled.li`
  font-size: 1rem;
  color: white;
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
    color: black;
    background-color: #76c9e8;
  }
`;

function SideBarItem({icon, title, clicked, onClick}) {
  return <SideItem className={clicked === title ? "active" : null} onClick={onClick}>
          {icon}
          {title}
          </SideItem>
}

export default SideBarItem;