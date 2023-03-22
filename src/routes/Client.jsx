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
import ShopDetail from "../components/client/shop/detail/ShopDetail";
import MemberProfile from "../components/client/my/MemberProfile";
import Reservation from "../components/client/shop/reservation/Reservation";
import Payment from "../components/client/shop/payment/Payment";
import TossCallback from "../components/client/shop/payment/TossCallback";

/*
  -client 화면을 구성할 대표 view
*/
function Client() {
  return (
    <>
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={<Main />} />

        {/* 서핑샵 페이지 */}
        <Route path="/shop" element={<ClientShop />} />
        <Route path="/shop/detail" element={<ShopDetail />} />
        <Route path="/shop/reservation" element={<Reservation />} />
        <Route path="/shop/payment" element={<Payment />} />
        <Route path="/shop/payment/success" element={<TossCallback />} />

        {/* 게시물 페이지 */}
        <Route path="/board" element={<ClientBoard />} />

        {/* 이슈 페이지 */}
        <Route path="/issue" element={<ClientIssue />} />

        {/* 마이 페이지 */}
        <Route path="/my" element={<ClientMy />} />
        <Route path="/my/edit" element={<MemberProfile />} />

        {/* 로그인 페이지 */}
        <Route path="/login" element={<ClientLogin />} />
        <Route path="/join" element={<ClientJoin />} />
        <Route path="/auth/kakao/callback" element={<KakaoCallback />} />
        <Route path="/auth/naver/callback" element={<NaverCallback />} />

      </Routes>
    </>
  );
}

export default Client;