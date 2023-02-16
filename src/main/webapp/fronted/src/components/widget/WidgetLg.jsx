import styled from "styled-components";

const WidgetLgContainer = styled.div`
  flex: 2;
  border-radius: 10px;

  -webkit-box-shadow: 0px 0px 15px -1px #000000; 
  box-shadow: 0px 0px 15px -1px #000000;

  padding: 20px;
`;

const WidgetLgTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`;

//table에 대한 세부 세팅은 차후 정리
//클래스를 여러개 두어 각 컬럼에 적용
//테이블에 대한 max-height를 지정하여 overflow시 scroll처리
const WidgetLgTable = styled.table`
  width: 100%;
  border-spacing: 20px;
  text-align: center;

  .widgetLgTh{
    text-align: left;
  }

  .widgetLgTime{
    font-size: 1.1rem;
    font-weight: 600;
    
    border-radius: 10%;
    background-color: darkblue;
    color: white;
  }
`;

/*
  해당 영역은 이번주 강습현황에 대한 내용을 출력할 예정
  우선은 공부를 위해 예시에서 알려준대로 구성하고 차후 수정
*/

function WidgetLg() {
  return (
    <WidgetLgContainer>
      <WidgetLgTitle>최근 처리내역</WidgetLgTitle>
      {/* 예약정보에 대한 props로부터 각 컬럼 정보 출력 */}
      <WidgetLgTable>
        <thead>
          <tr>
            <th>예약자명</th>
            <th>예약시간</th>
            <th>예약인원</th>
            <th>연락처</th>
            <th>강습형태</th>
          </tr>
        </thead>
        {/* 예약시간에 대한 내용만 강조 */}
        <tbody>
          <tr>
            <td>황인웅</td>
            <td className="widgetLgTime">12시</td>
            <td>6</td>
            <td>01091716860</td>
            <td>일반</td>
          </tr>
        </tbody>
      </WidgetLgTable>
    </WidgetLgContainer>
  );
}

export default WidgetLg;