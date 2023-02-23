import styled from "styled-components";

const TableContainer = styled.div`
  margin: 20px;
  padding: 15px;
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
    text-align: center;
    position: sticky;
    top:0;
    background-color: white !important;
  }
`;

function SalesTable() {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr className="tableTh">
            <th style={{ width: "5%", textAlign: "left" }}> </th>
            <th style={{ width: "40%" }}> </th>
            <th style={{ width: "10%" }}>전체매출</th>
            <th style={{ width: "10%" }}>상품매출</th>
            <th style={{ width: "10%" }}>강습매출</th>
            <th style={{ width: "25%" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>강습점유율</span>
                <span>강습점유율</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td style={{ textAlign: "left" }}>2월 23일</td>
            <td>9,000,000</td>
            <td>4,500,000</td>
            <td>4,500,000</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default SalesTable;