import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import DashBoardMain from "../components/home/DashBoardMain";
import Sidebar from "../components/main/sidebar/Sidebar";
import Topbar from "../components/main/topbar/Topbar";
import Member from "../components/member/Member";
import Menu from "../components/shop/Menu";
import Shop from "../components/shop/Shop";
import Trainer from "../components/shop/Trainer";

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
          <Route path="/" element={<Shop />}></Route>
          <Route path="/trainer" element={<Trainer />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/sales" element={<DashBoardMain />}></Route>
          <Route path="/member" element={<Member />}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default Main;