import styled from "styled-components";
import SideBarMenu from "./SideBarMenu";
import HomeIcon from '@mui/icons-material/Home';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PersonIcon from '@mui/icons-material/Person';
import SurfingIcon from '@mui/icons-material/Surfing';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

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
    -icon : 하위 메뉴와 일치하는 아이콘 jsx
  */
  const menu = [
    {
      title : 'DashBoard',
      sub: ['Home', '매출분석', '예약분석'],
      icon: [
            <HomeIcon className="sideicon"/>,
            <ShowChartIcon className="sideicon"/>,
            <EventAvailableIcon className="sideicon"/>
            ]
    },
    {
      title: 'Quick',
      sub: ['회원관리', '라이딩관리', '상품관리', '예약관리'],
      icon: [
            <PersonIcon className="sideicon"/>,
            <SurfingIcon className="sideicon"/>,
            <LocalMallIcon className="sideicon"/>,
            <CalendarMonthIcon className="sideicon"/>
            ]
    },
  ];
  return (
    <SideBarContainer>
      <SideBarWrapper>
        {/* 객체의 길이만큼 반복문 실행 */}
        {menu && menu.map((menu, index) => {
          return (
            <SideBarMenu
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