import styled from "styled-components";
import Chart from "../components/dashboard/Chart";
import Info from "../components/dashboard/Info";
import WidgetSm from "../components/widget/WidgetSm";
import WidgetLg from "../components/widget/WidgetLg";

const HomeContainer = styled.div`
  flex: 5;
  padding: 15px;
  padding-top: 20px;
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
        <WidgetSm/>
        <WidgetLg/>
      </WidgetContaiber>
    </HomeContainer>
  );
}

export default Home;