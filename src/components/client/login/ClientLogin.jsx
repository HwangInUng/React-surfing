import ClientContainer from "../../common/ClientContainer";
import Footer from "../main/Footer";
import Topbar from "../main/topbar/Topbar";

function ClientLogin() {
  return (
    <>
      <Topbar />
      <ClientContainer>
        로그인 페이지
      </ClientContainer>
      <Footer />
    </>
  )
}

export default ClientLogin;