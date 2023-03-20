import { Route, Routes } from "react-router-dom";
import Main from "../components/client/main/Main";
import ClientShop from "../components/client/shop/ClientShop";
import ClientBoard from "../components/client/board/ClientBoard";
import ClientIssue from "../components/client/issue/ClientIssue";
import ClientMy from "../components/client/my/ClientMy";
import ClientLogin from "../components/client/login/ClientLogin";
import ClientJoin from "../components/client/login/ClientJoin";
import KakaoCallback from "../components/client/login/KakaoCallback";
import NaverCallback from "../components/client/login/NaverCallback";

/*
  -client 화면을 구성할 대표 view
*/
function Client() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<ClientShop />} />
        <Route path="/board" element={<ClientBoard />} />
        <Route path="/issue" element={<ClientIssue />} />
        <Route path="/my" element={<ClientMy />} />
        <Route path="/login" element={<ClientLogin />} />
        <Route path="/join" element={<ClientJoin />} />

        <Route path="/auth/kakao/callback" element={<KakaoCallback />} />
        <Route path="/auth/naver/callback" element={<NaverCallback />} />
      </Routes>
    </>
  );
}

export default Client;