import styled from "styled-components";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";
import Home from "../home/Home";

const Container = styled.div`
  display: flex;
`;

function Main() {
  return (
    <div className="Main">
      <Topbar />
      <Container>
        <Sidebar />
        <Home />
      </Container>
    </div>
  );
}

export default Main;