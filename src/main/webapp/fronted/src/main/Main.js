import styled from "styled-components";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";

const Container = styled.div`
  display: flex;
`;

const Others = styled.div`
  flex: 4;
  background-color: wheat;
`;

function Main() {
  return (
    <div className="Main">
      <Topbar />
      <Container>
        <Sidebar />
        <Others>test</Others>
      </Container>
    </div>
  );
}

export default Main;