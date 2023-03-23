import styled from "styled-components";

const TableContainer = styled.div`
  margin: 20px;
  padding: 10px;
  border-radius: 10px;

  -webkit-box-shadow: 0px 0px 5px -1px #000000; 
  box-shadow: 0px 0px 5px -1px #000000;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
  text-align: center;
  border-collapse: separate;

  .tableTh{
    font-size: 0.8rem;
    color: gray;
    position: sticky;
    top:0;
    background-color: white !important;
  }
`;
/* progress의 value를 전달받아 동적으로 스타일 적용 */
const ProgressBar = styled.div`
  width: 65%;
  height: 10px;
  margin: 0px 5px;
  background-color: #e5aa80;
  border-radius: 10px;

  .progress{
    width: ${props => props.val || 0}%;
    height: 100%;
    background-color: #84a1e5;
  }
`;

function SalesTable() {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr className="tableTh">
            <th style={{ width: "2%", textAlign: "left" }}> </th>
            <th style={{ width: "35%" }}> </th>
            <th style={{ width: "10%" }}>전체매출</th>
            <th style={{ width: "10%" }}>상품매출</th>
            <th style={{ width: "10%" }}>강습매출</th>
            <th style={{ width: "25%" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>강습점유율</span>
                <span>상품점유율</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* 일주일 간 일일 결과를 담당하는 레코드 */}
          <tr>
            <td>1</td>
            <td style={{ textAlign: "left" }}>2월 23일</td>
            <td>9,000,000</td>
            <td>4,500,000</td>
            <td>4,500,000</td>
            <td style={{height: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}>
              {/* 
                -해당 progressbar는 당일 상품 및 강습 현황의 비율을 나타냄
                -따라서, 상단 span은 강습, 하단 span은 강습을 제외한 값(상품)의 value를 넣어줌
                -컴포넌트 내 state로 선언하여 변경 시 리-렌더링 가능토록 조정 필요
              */}
              <span>40%</span>
              <ProgressBar val={40}>
                <div className="progress"/>
              </ProgressBar>
              <span>60%</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default SalesTable;