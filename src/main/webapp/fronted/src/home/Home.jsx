import styled from "styled-components";
import Chart from "../components/dashboard/Chart";
import Info from "../components/dashboard/Info";
import WidgetLg from "../components/widgetlg/WidgetLg";
import WidgetSm from "../components/widgetsm/WidgetSm";

const HomeContainer = styled.div`
  flex: 5;
  padding: 15px;
`;

const WidgetContaiber = styled.div`
  display: flex;
  margin: 20px;
`;

function Home() {
  return (
    <HomeContainer>
      <Info />
      <Chart />
      <WidgetContaiber>
        <WidgetSm />
        <WidgetLg />
      </WidgetContaiber>
    </HomeContainer>
  );
}

export default Home;