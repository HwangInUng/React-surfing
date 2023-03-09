import ClientContainer from "../../common/ClientContainer";
import Footer from "../main/Footer";
import Topbar from "../main/topbar/Topbar";

function ClientMy() {
  return (
    <>
      <Topbar />
      <ClientContainer>
        마이페이지
      </ClientContainer>
      <Footer />
    </>
  )
}

export default ClientMy;