import styled from "styled-components";
import Chart from "../components/dashboard/Chart";
import Info from "../components/dashboard/Info";

const HomeContainer = styled.div`
  flex: 5;
  padding: 15px;
`;

function Home() {
  return (
    <HomeContainer>
      <Info />
      <Chart/>
    </HomeContainer>
  );
}

export default Home;