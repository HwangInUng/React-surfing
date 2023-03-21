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
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: #7ca2eb;
  }
`;

const SideLink = styled(Link)`
  font-size: 1.3rem;
  font-weight: bold;
  text-decoration: none;
  color: black;
`;

function SideBarItem({ title, link, }) {
  return <SideItem>
    <SideLink to={link}>
      {title}
    </SideLink>
  </SideItem>
}

export default SideBarItem;