import { Route, Router, Routes } from "react-router-dom";
import styled from "styled-components";
import Main from "../components/client/main/Main";
import Topbar from "../components/client/main/topbar/Topbar";

//전체를 감쌀 컨테이너
const ClientHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;
`;

const ClientFooter = styled.footer`
  background: #dcdcdc;
  height: 100px;
`;

/*
  -client 화면을 구성할 대표 view
*/
function Client() {
  return (
    <>
      <ClientHeader>
        <Topbar />
      </ClientHeader>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <ClientFooter>
        hi
      </ClientFooter>
    </>
  );
}

export default Client;