import ClientContainer from "../../common/ClientContainer";
import Footer from "../main/Footer";
import Topbar from "../main/topbar/Topbar";

function ClientBoard() {
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