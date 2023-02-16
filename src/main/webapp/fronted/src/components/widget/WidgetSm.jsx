import styled from "styled-components";
import VisibilityIcon from '@mui/icons-material/Visibility';

const WidgetSmContainer = styled.div`
  flex: 1;
  border-radius: 10px;

  -webkit-box-shadow: 0px 0px 15px -1px #000000; 
  box-shadow: 0px 0px 15px -1px #000000;

  padding: 20px;
  margin-right: 20px;
`;

//타이틀 설정
const WidgetSmTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;

//유저의 목록을 보여줄 리스트
const WidgetSmList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

//유저 1명을 담당할 링크
const WidgetSmItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;

  .widgetSmImg{
    width: 40px;
   height: 40px;
   border-radius: 50%;
   object-fit: cover;
  }
`;

const WidgetSmUser = styled.div`
  display: flex;
  flex-direction: column;
`;

const WidgetSmUserName = styled.span`
  font-weight: 600;
`;

const WidgetSmUserTitle = styled.span`
  font-weight: 300;
`;

const WidgetSmButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;

  .widgetIcon{
    font-size: 1.5rem !important;
    margin-right: 5px;
  }
`;

/*
  해당 영역은 새로 가입한 회원에 대한 정보를 열람
  최대 10명까지 가장 최근에 등록한 회원만 출력
  넘치는 데이터는 스크롤로 적용
*/

function WidgetSm() {
  return (
    <WidgetSmContainer>
      <WidgetSmTitle>새로 가입한 회원</WidgetSmTitle>
      <WidgetSmList>
        {/* 회원 한명에 대한 정보를 담을 컴포넌트 재사용필요 */}
        <WidgetSmItem>
          <img
            className="widgetSmImg"
            src="/img/profile.jpg"
            alt="..."
          />
          <WidgetSmUser>
            {/* props로 넘겨받은 데이터 표현범위 */}
            <WidgetSmUserName>Test</WidgetSmUserName>
            <WidgetSmUserTitle>back-end</WidgetSmUserTitle>
          </WidgetSmUser>
          <WidgetSmButton>
            <VisibilityIcon className="widgetIcon"/>
            보러가기
          </WidgetSmButton>
        </WidgetSmItem>
      </WidgetSmList>
    </WidgetSmContainer>
  );
}

export default WidgetSm;