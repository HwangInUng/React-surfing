import styled from "styled-components";
import TopbarItem from "./TopbarItem";

//하나의 메뉴그룹
const MenuContainer = styled.div`
  display: flex;
`;

//리스트의 스타일 미적용
const TopbarList = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
  padding: 0.5rem;
`;

function TopbarMenu({ menu, onClick, clicked }) {
  return (
    <MenuContainer>
      <TopbarList>
        {/* // clicked : Item클릭 시 값이 변경될 조건 변수
        // onClick : sub(Item명)을 매개변수로 전달받아 clicekd 값 변경
        // clicked={clicked} */}
        <TopbarItem title="홈" />
        <TopbarItem title="서핑샵" />
        <TopbarItem title="뽐내기" />
        <TopbarItem title="이슈" />
        <TopbarItem title="마이" />
      </TopbarList>
    </MenuContainer>
  );
}

export default TopbarMenu;