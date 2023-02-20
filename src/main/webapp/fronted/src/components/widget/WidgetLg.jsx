import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const WidgetLgContainer = styled.div`
  flex: 2;
  border-radius: 10px;

  -webkit-box-shadow: 0px 0px 12px -1px #000000; 
  box-shadow: 0px 0px 12px -1px #000000;

  padding: 20px;
`;

const WidgetLgTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 800;
`;

const WidgetTableWrapper = styled.div`
  max-height: 200px;
  overflow: scroll;
`;

/*
  -table에 대한 세부 세팅은 차후 정리
  -클래스를 여러개 두어 각 컬럼에 적용
  -테이블에 대한 max-height를 지정하여 overflow시 scroll처리
  -border-collapse : 테이블의 셀 또는 행간의 간격을 설정
*/
const WidgetLgTable = styled.table`
  width: 100%;
  border-spacing: 20px;
  text-align: center;
  border-collapse: separate;
  border-spacing: 0px 10px;

  .widgetLgTh{
    position: sticky;
    top:0;
    background-color: white !important;
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
  const dummyData = [
    { name: '예약자1', time: 10, count: 4, phone: '01012345234', type: '일반' },
    { name: '예약자2', time: 13, count: 2, phone: '01034532434', type: '커플' },
    { name: '예약자3', time: 10, count: 5, phone: '01000100023', type: '일반' },
    { name: '예약자4', time: 15, count: 1, phone: '01054744533', type: '개인' },
    { name: '예약자5', time: 15, count: 6, phone: '01093458455', type: '일반' },
  ];
  //비동기 요청을 통해 넘겨받을 data state
  const [data, setData] = useState(dummyData);
  useEffect(() => {
    // 생성 시 비동기통신을 실행할 함수 포함
  }, []);
  return (
    <WidgetLgContainer>
      <WidgetLgTitle>당일 예약현황</WidgetLgTitle>
      {/* 예약정보에 대한 props로부터 각 컬럼 정보 출력 */}
      <WidgetTableWrapper>
        <WidgetLgTable>
          <thead  className="widgetLgTh">
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
            {data && data.map((data, index) => {
              return (
                <tr className="widgetLgTr" key={index}>
                  <td>{data.name}</td>
                  <td>
                    <span className="widgetLgTime">{data.time}시</span>
                  </td>
                  <td>{data.count}</td>
                  <td>{data.phone}</td>
                  <td>{data.type}</td>
                </tr>
              )
            })}
          </tbody>
        </WidgetLgTable>
      </WidgetTableWrapper>
    </WidgetLgContainer>
  );
}

export default WidgetLg;