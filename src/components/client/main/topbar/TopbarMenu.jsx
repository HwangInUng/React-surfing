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

function TopbarMenu({ navData, clicked }) {
  return (
    <MenuContainer>
      <TopbarList>
        {/* // clicked : Item클릭 시 값이 변경될 조건 변수
        // onClick : sub(Item명)을 매개변수로 전달받아 clicekd 값 변경
        // clicked={clicked} */}
        {navData && navData.map((data, index) => {
          return (
            <TopbarItem
              key={index}
              title={data.title}
              link={data.link}
              clicked={clicked}
            />
          )
        })}
      </TopbarList>
    </MenuContainer>
  );
}

export default TopbarMenu;