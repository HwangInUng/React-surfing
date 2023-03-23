import styled from "styled-components";
//사용할 아이콘들에 대한 import 진행
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';

//상단 nav 요소들을 담을 div(항상 상단에 고정)
const TopbarDiv = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  padding: 0;

  -webkit-box-shadow: 0px 0px 5px 0px #000000; 
  box-shadow: 0px 0px 5px 0px #000000;

  position: sticky;
  top: 0;
  z-index: 999;
`;

//요소들의 배치를 담당할 div
const TopbarWrapper = styled.div`
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

//Nav의 오른쪽 영역에 대한 div
const TopRight = styled.div`
  display: flex;
  align-items: center;
`;

//아이콘 + 메세지를 표시할 div
const TopbarIconCotainer = styled.div`
  position: relative;
  margin-right: 15px;
  color: #555;
`;

//아이콘에 해당하는 메세지를 표시할 요소
const TopIconBadge = styled.span`
  position: absolute;
  top: -5px;
  right: 4px;

  background-color: red;
  border-radius: 50%;
  height: 15px;
  width: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 13;
  color: white;
`;

//접속자의 프로필 사진을 나타낼 이미지 생성
const TopAvatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;


function Topbar() {
  return (
    <TopbarDiv>
      <TopbarWrapper>
        <div className="topLeft">
          <Logo>
            <img  //Logo 이미지 추가
              src="/img/home.png"
              alt="..."
              width="200px"
              height="50px"
              onClick={() => window.location.href="/"}
            />
          </Logo>
        </div>

        {/* 해당 위치를 컴포넌트로 구분하여 사용 */}
        <TopRight>
          {/* 컨테이너 단위로 컴포넌트화 필요 */}
          <TopbarIconCotainer>
            <NotificationsNoneIcon />
            <TopIconBadge>2</TopIconBadge>
          </TopbarIconCotainer>
          <TopbarIconCotainer>
            <ShoppingCartIcon />
            <TopIconBadge>2</TopIconBadge>
          </TopbarIconCotainer>
          <TopbarIconCotainer>
            <SettingsIcon />
          </TopbarIconCotainer>
          <TopAvatar
            src="/img/profile.jpg"
            alt="..."
          />
        </TopRight>

      </TopbarWrapper>
    </TopbarDiv>
  );
}

export default Topbar;