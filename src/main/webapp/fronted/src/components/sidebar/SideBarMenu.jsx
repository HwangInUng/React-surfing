import { useState } from "react";
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
  color: #555;
`;

//리스트의 스타일 미적용
const SideBarList = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0.5rem;
`;

function SideBarMenu({menu}) {
  //item클릭 시 active 활성화 판단할 state
  const [] = useState(0);
  return (
    <MenuContainer>
      {/* 타이틀 : sidebar로 부터 props로 얻기 */}
      <SideBarTitle>
        {menu.title}
      </SideBarTitle>
      {/* 만약 title이 home이면 리스트 및 아이템 불필요 */}
      <SideBarList>
        {menu.sub.map((sub, index) => {
          return(
          <SideBarItem
            key={index}
            icon={menu.icon[index]}
            title={sub}
          />
          )
        })}
      </SideBarList>
    </MenuContainer>
  );
}

export default SideBarMenu;