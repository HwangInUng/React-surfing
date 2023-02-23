import styled from "styled-components";
import WidgetSmItem from "./WidgetSmItem";

const WidgetSmContainer = styled.div`
  flex: 1;
  border-radius: 10px;

  -webkit-box-shadow: 0px 0px 5px -1px #000000; 
  box-shadow: 0px 0px 5px -1px #000000;

  padding: 20px;
  margin-right: 20px;
`;

const WidgetSmWrapper = styled.div`
  max-height: 200px;
  overflow: scroll;
`;

//타이틀 설정
const WidgetSmTitle = styled.span`
  font-size: 1.3rem;
  font-weight: 800;
`;

//유저의 목록을 보여줄 리스트
const WidgetSmList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

/*
  해당 영역은 새로 가입한 회원에 대한 정보를 열람
  최대 10명까지 가장 최근에 등록한 회원만 출력
  넘치는 데이터는 스크롤로 적용
*/

function WidgetSm() {
  const datas = [
    { name: "test", title: "delvop", src: "/img/profile.jpg" },
    { name: "test", title: "delvop", src: "/img/profile.jpg" },
    { name: "test", title: "delvop", src: "/img/profile.jpg" },
    { name: "test", title: "delvop", src: "/img/profile.jpg" },
  ];
  return (
    <WidgetSmContainer>
      <WidgetSmTitle>보드보관 만료예정 회원</WidgetSmTitle>
      <WidgetSmWrapper>
        <WidgetSmList>
          {datas && datas.map((data, index) => {
            return (
              <WidgetSmItem
                data={data}
                key={index}
              >
              </WidgetSmItem>
            )
          })}
        </WidgetSmList>
      </WidgetSmWrapper>
    </WidgetSmContainer>
  );
}

export default WidgetSm;