import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import DashBoardMain from "../components/admin/home/DashBoardMain";
import Sidebar from "../components/admin/main/sidebar/Sidebar";
import Topbar from "../components/admin/main/topbar/Topbar";
import Member from "../components/admin/member/Member";
import Menu from "../components/admin/shop/Menu";
import Shop from "../components/admin/shop/Shop";
import Trainer from "../components/admin/shop/Trainer";

const Container = styled.div`
  display: flex;
`;

/*
  -해당 페이지를 출력하기 위해서는 로그인이 완료된 상태여야함.
  -로그인이 되지 않은 상태라면 로그인 화면으로 전환하는 기능 추가
*/
function Admin() {
  return (
    <div>
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

export default Admin;