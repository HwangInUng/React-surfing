import ClientContainer from "../../common/ClientContainer";
import Footer from "../main/Footer";
import Topbar from "../main/topbar/Topbar";
import MemberCard from "./MemberCard";
import MemberInfo from "./MemberInfo";
import Sidebar from "./BottomMenu";

function ClientMy() {
  return (
    <>
      <Topbar />
      <ClientContainer>
        <MemberCard />
        <MemberInfo />
        <Sidebar/>
      </ClientContainer>
      <Footer />
    </>
  )
}

export default ClientMy;