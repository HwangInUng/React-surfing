import ClientContainer from "../../common/ClientContainer";
import Footer from "../main/Footer";
import Topbar from "../main/topbar/Topbar";

function ClientIssue() {
  return (
    <>
      <Topbar />
      <ClientContainer>
        이슈 페이지
      </ClientContainer>
      <Footer />
    </>
  )
}

export default ClientIssue;