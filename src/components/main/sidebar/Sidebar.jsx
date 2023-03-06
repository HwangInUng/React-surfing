import styled from "styled-components";
import SideBarMenu from "./SideBarMenu";
import HomeIcon from '@mui/icons-material/Home';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PersonIcon from '@mui/icons-material/Person';
import SurfingIcon from '@mui/icons-material/Surfing';
import LocalMallIcon from '@mui/icons-material/LocalMall';
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
  background-color: #001b33;

  -webkit-box-shadow: 0px 0px 5px 0px #000000; 
  box-shadow: 0px 0px 5px 0px #000000;

  position: sticky;
  top: 50px;
`;

/*
  메뉴 그룹을 담을 div
  패딩과 글자색 설정
*/
const SideBarWrapper = styled.div`
  padding: 20px;
  color: #white;

  .sideicon{
    margin-right: 5px;
    font-size: 2rem !important;
  }
`;


function Sidebar() {
  /*
    -사이드바 메뉴 구성을 위한 객체
    -title: 메뉴 상단 타이틀
    -sub : 상단 타이틀의 하위 메뉴
    -link : 클릭 시 이동할 path 경로
    -icon : 하위 메뉴와 일치하는 아이콘 jsx
  */
  const menu = [
    {
      title: 'Operate',
      sub: ['매장등록', '강사등록', '메뉴등록'],
      link: ['/main/shop', '/main/trainer', '/main/menu'], //각 페이지별 to 속성의 경로를 지정
      icon: [
        <HomeIcon className="sideicon" />,
        <SurfingIcon className="sideicon" />,
        <LocalMallIcon className="sideicon" />
      ]
    },
    {
      title: 'DashBoard',
      sub: ['매출분석', '회원분석', '예약관리'],
      link: ['/main/sales', '/main/member', '/main/reservation'], //각 페이지별 to 속성의 경로를 지정
      icon: [
        <ShowChartIcon className="sideicon" />,
        <PersonIcon className="sideicon" />,
        <CalendarMonthIcon className="sideicon" />
      ]
    },
  ];
  //item클릭 시 active 활성화 판단할 state
  const [clicked, setClicked] = useState("");
  const onClick = (sub) => {
    setClicked((current) => current = sub); //현재 clicked state를 sub로 변경
  };
  return (
    <SideBarContainer>
      <SideBarWrapper>
        {/* 객체의 길이만큼 반복문 실행 */}
        {menu && menu.map((menu, index) => {
          return (
            <SideBarMenu
              onClick={onClick}
              clicked={clicked}
              menu={menu} //메뉴 객체 자체를 props로 전달
              key={index}
            />
          )
        })}
      </SideBarWrapper>
    </SideBarContainer>
  );
}

export default Sidebar;