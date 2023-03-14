import ClientContainer from "../../common/ClientContainer";
import Footer from "../main/Footer";
import Topbar from "../main/topbar/Topbar";
import LoginContainer from "./LoginContainer";
import SNSContainer from "./SNSContainer";

function ClientLogin() {
  return (
    <>
      <Topbar />
      <ClientContainer>
        <LoginContainer></LoginContainer>
        <SNSContainer></SNSContainer>
      </ClientContainer>
      <Footer />
    </>
  )
}

export default ClientLogin;