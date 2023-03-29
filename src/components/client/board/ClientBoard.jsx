import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ClientContainer from "../../common/ClientContainer";
import Footer from "../main/Footer";
import Topbar from "../main/topbar/Topbar";

function ClientBoard() {
  const navigate = useNavigate();
  useEffect(() => {
    alert("서비스 준비중입니다!!");
    navigate("/");
  }, []);
  return (
    <>
      <Topbar />
      <ClientContainer>
        뽐내기 페이지
      </ClientContainer>
      <Footer />
    </>
  )
}

export default ClientBoard;