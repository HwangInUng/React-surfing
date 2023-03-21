import { Link } from "react-router-dom";
import styled from "styled-components";

/*
  커서는 포인터로 지정하며 모서리는 둥글게 구성
  hover를 통해 마우스 오버 시 시각화
  active도 동일하게 색상 적용
*/
const Item = styled.li`
  font-size: 1rem;
  padding: 5px;
  margin: 0px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 20%;

  &.active,
  &:hover {
    border-bottom: 2px solid #7ca2eb;
  }
`;

const ItemLink = styled(Link)`
color: black !important;
  width: 100%;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
`;

/*
  -title : item 타이틀
  -link : to속성으로 전달될 url주소
  -clicked : 클릭 시 active 부여를 위한 판단값
*/
function TopbarItem({ title, link, clicked, onClick }) {
  return <Item className={clicked === link ? "active" : null}>
    <ItemLink to={link} onClick={onClick}>
      {title}
    </ItemLink>
  </Item>
}

export default TopbarItem;