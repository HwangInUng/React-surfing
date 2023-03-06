import styled from "styled-components";
import SideBarItem from "./SideBarItem";

//하나의 메뉴그룹
const MenuContainer = styled.div`
  margin-bottom: 2rem;
`;

//메뉴 타이틀
const SideBarTitle = styled.h3`
  display: flex;
  margin: 0;
  align-items: center;
  font-size: 1.2rem;
  padding: 5px;
  color: white;
  border-bottom: 1px solid #76c9e8;
`;

//리스트의 스타일 미적용
const SideBarList = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0.5rem;
`;

function SideBarMenu({ menu, onClick, clicked }) {
  return (
    <MenuContainer>
      {/* 타이틀 : sidebar로 부터 props로 얻기 */}
      <SideBarTitle>
        {menu.title}
      </SideBarTitle>
      {/* 만약 title이 home이면 리스트 및 아이템 불필요 */}
      <SideBarList>
        {menu.sub.map((sub, index) => {
          return (
            <SideBarItem
              key={index}
              icon={menu.icon[index]}
              title={sub}
              link={menu.link[index]}
              // clicked : Item클릭 시 값이 변경될 조건 변수
              // onClick : sub(Item명)을 매개변수로 전달받아 clicekd 값 변경
              clicked={clicked}
              onClick={() => onClick(sub)}
            />
          )
        })}
      </SideBarList>
    </MenuContainer>
  );
}

export default SideBarMenu;