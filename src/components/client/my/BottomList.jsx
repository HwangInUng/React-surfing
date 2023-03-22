import styled from "styled-components";
import SideBarItem from "./BottomItem";

//하나의 메뉴그룹
const MenuContainer = styled.div`
  margin: 10px 0px;

  .title{
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: #7e8080;
  }
`;

//리스트의 스타일 미적용
const SideBarList = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0.5rem;
`;

function SideBarMenu({ menu, adminPage }) {
  return (
    <MenuContainer>
      {/* 타이틀 : sidebar로 부터 props로 얻기 */}
      <label className="title">
        {menu.title}
      </label>
      {/* 만약 title이 home이면 리스트 및 아이템 불필요 */}
      <SideBarList>
        {menu.sub.map((sub, index) => {
          //매장관리 아이템이 생성될 때 사업자 회원이 아닌 경우 미출력
          return (sub === '매장관리' && !adminPage ?
            null :
            <SideBarItem
              key={index}
              title={sub}
              link={menu.link[index]}
            />
          )
        })}
      </SideBarList>
    </MenuContainer>
  );
}

export default SideBarMenu;