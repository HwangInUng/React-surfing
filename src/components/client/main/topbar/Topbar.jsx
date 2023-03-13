import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import TopbarItem from "./TopbarItem";
//사용할 아이콘들에 대한 import 진행
import TopbarMenu from "./TopbarMenu";

const ClientHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;
`;

//상단 nav 요소들을 담을 div(항상 상단에 고정)
const TopbarDiv = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  background-color: white;

  box-shadow: 0px 0px 1px 0px #555;
`;

//요소들의 배치를 담당할 div
const TopbarWrapper = styled.div`
  width: 50%;
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

//Logo를 담을 span 생성
const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: darkblue;
  cursor: pointer;
`;

//Nav의 왼쪽 영역
const TopLeft = styled.div`
  display: flex;
  align-items: center;
`;
//Nav의 센터 영역
const TopCenter = styled.div`
  display: flex;
  align-items: center;
`;
//Nav의 오른쪽 영역
const TopRight = styled.div`
  display: flex;
  align-items: center;
`;


function Topbar() {
  /*
    -location : route가 변경될때마다 해당 url을 획득
    -clicked : nav 메뉴별 클릭 시 조건을 판단할 state
    -Topbar 렌더링 시 해당 url을 획득하여 clicked와 비교
    -link와 url이 일치할 경우 active 효과 적용
  */
  const location = useLocation();
  const [clicked, setClicked] = useState("");
  useEffect(() => {
    setClicked(location.pathname);
  }, [location]);
  
  // 상단 네비게이션 타이틀 및 링크url
  const navData = [
    { title: '홈', link: '/' },
    { title: '서핑샵', link: '/shop' },
    { title: '뽐내기', link: '/board' },
    { title: '이슈', link: '/issue' },
    { title: '마이', link: '/my' }
  ];
  const loginData = {title: 'Login', link: '/login'};
  return (
    <ClientHeader>
      <TopbarDiv>
        <TopbarWrapper>
          <TopLeft>
            <Logo>
              <img  //Logo 이미지 추가
                src="/img/logo.png"
                alt="..."
                width="40"
                height="35"
              />{' '}
              Shaka
            </Logo>
          </TopLeft>

          {/* 해당 위치를 컴포넌트로 구분하여 사용 */}
          <TopCenter>
            <TopbarMenu
              navData={navData}
              clicked={clicked}
            />
          </TopCenter>

          <TopRight>
            {/* 클릭 시 로그인 페이지로 넘어가며 active 효과 불필요 */}
            <TopbarItem
              link={loginData.link}
              title={loginData.title}
            />
          </TopRight>
        </TopbarWrapper>
      </TopbarDiv>
    </ClientHeader>
  );
}

export default Topbar;