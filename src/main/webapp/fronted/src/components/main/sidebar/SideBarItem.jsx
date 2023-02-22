import { Link } from "react-router-dom";
import styled from "styled-components";

/*
  커서는 포인터로 지정하며 모서리는 둥글게 구성
  hover를 통해 마우스 오버 시 시각화
  active도 동일하게 색상 적용
*/
const SideItem = styled.li`
  font-size: 1rem;
  padding: 5px;
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;

  &.active,
  &:hover {
    color: black;
    background-color: #76c9e8;
  }
`;

const SideLink = styled(Link)`
  text-decoration: none;
  color: white
`;

function SideBarItem({ icon, title, link, clicked, onClick }) {
  return <SideItem
    className={clicked === title ? "active" : null} //클릭 여부에 따라 액티브 활성화
    // 클릭 메서드 전달
    onClick={onClick}> 
    {/* 
     -props로 전달받은 정보 주입
     -link : route path 경로
    */}
    <SideLink to={link}>
      {icon}
      {title}
    </SideLink>
  </SideItem>
}

export default SideBarItem;