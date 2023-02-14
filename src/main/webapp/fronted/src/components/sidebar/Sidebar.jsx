import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SurfingIcon from '@mui/icons-material/Surfing';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useState } from "react";

/*
  TopBar와의 간격을 위해 상단에서 50px 조정
  전체 요소를 담을 컨테이너
  위치를 고정하기 위해 sticky 사용
 */
const SideBarContainer = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: rgb(240, 239, 239);

  position: sticky;
  top: 50px;
`;

/*
  메뉴 그룹을 담을 div
  패딩과 글자색 설정
*/
const SideBarWrapper = styled.div`
  padding: 20px;
  color: #555;
`;

//하나의 메뉴그룹
const SideBarMenu = styled.div`
  margin-bottom: 2rem;
`;

//메뉴 타이틀
const SideBarTitle = styled.h3`
  font-size: 0.9rem;
  color: rgb(197, 197, 197);
`;

//리스트의 스타일 미적용
const SideBarList = styled.ul`
  list-style: none;
  padding: 0.5rem;
`;

/*
  커서는 포인터로 지정하며 모서리는 둥글게 구성
  hover를 통해 마우스 오버 시 시각화
  active도 동일하게 색상 적용
*/
const SideBarItem = styled.li`
  color: #555;
  padding: 5px;
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

function Sidebar() {
  const [clicked, setClicked] = useState(false);
  const onClick = () => setClicked((current) => !current);
  return (
    <SideBarContainer>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarTitle>DashBoard</SideBarTitle>
          <SideBarList>
            <SideBarItem
              className={clicked ? "active" : null}
              onClick={onClick}
            >
              <HomeIcon />
              Menu1
            </SideBarItem>
            <SideBarItem>
              <PersonIcon />
              Menu2
            </SideBarItem>
            <SideBarItem>
              <SurfingIcon />
              Menu3
            </SideBarItem>
            <SideBarItem>
              <CalendarMonthIcon />
              Menu4
            </SideBarItem>
          </SideBarList>
        </SideBarMenu>
        <SideBarMenu>
          <SideBarTitle>DashBoard</SideBarTitle>
          <SideBarList>
            <SideBarItem>
              <HomeIcon />
              Menu1
            </SideBarItem>
            <SideBarItem>
              <PersonIcon />
              Menu2
            </SideBarItem>
            <SideBarItem>
              <SurfingIcon />
              Menu3
            </SideBarItem>
            <SideBarItem>
              <CalendarMonthIcon />
              Menu4
            </SideBarItem>
          </SideBarList>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
}

export default Sidebar;