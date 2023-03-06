import styled from "styled-components";
import WidgetSm from "./widget/WidgetSm";
import WidgetLg from "./widget/WidgetLg";
import Info from "./dashboard/Info";
import Chart from "./dashboard/Chart";

const HomeContainer = styled.div`
  flex: 5;
  padding: 15px;
  padding-top: 20px;
`;

const WidgetContainer = styled.div`
  display: flex;
  margin: 20px;
`;

function Home() {
  return (
    <HomeContainer>
      <Info />
      <Chart />
      <WidgetContainer>
        <WidgetSm/>
        <WidgetLg/>
      </WidgetContainer>
    </HomeContainer>
  );
}

export default Home;