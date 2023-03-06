import styled from "styled-components";
import SalesCategory from "./SalesCategory";
import SalesChart from "./SalesChart";
import SalesTable from "./SalesTable";

const SalesContainer = styled.div`
  flex: 5;
  padding: 15px;
  padding-top: 20px;
`;

function Sales() {
  return (
    <SalesContainer>
      <SalesCategory />
      <SalesChart />
      <SalesTable />
    </SalesContainer>
  );
}

export default Sales;