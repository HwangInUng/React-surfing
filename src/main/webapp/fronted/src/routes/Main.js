import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "../components/home/Home";
import Sidebar from "../components/main/sidebar/Sidebar";
import Topbar from "../components/main/topbar/Topbar";
import Sales from "../components/sales/Sales";

const Container = styled.div`
  display: flex;
`;

function Main() {
  return (
    <div className="Main">
      <Topbar />
      <Container>
        <Sidebar />
        {/* 해당 위치에 서브로 보여질 라우팅 대상 컴포넌트 등록 */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sales" element={<Sales />}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default Main;