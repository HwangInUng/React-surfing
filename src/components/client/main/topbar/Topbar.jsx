import styled from "styled-components";
import TopbarItem from "./TopbarItem";
//사용할 아이콘들에 대한 import 진행
import TopbarMenu from "./TopbarMenu";

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
  width: 60%;
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
  return (
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
          <TopbarMenu />
        </TopCenter>

        <TopRight>
          <TopbarItem
            title="login"
          />
        </TopRight>
      </TopbarWrapper>
    </TopbarDiv>
  );
}

export default Topbar;