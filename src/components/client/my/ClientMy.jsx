import { useEffect, useState } from "react";
import { accessClient } from "../../..";
import ClientContainer from "../../common/ClientContainer";
import Footer from "../main/Footer";
import Topbar from "../main/topbar/Topbar";
import BottomMenu from "./BottomMenu";
import MemberCard from "./MemberCard";
import MemberInfo from "./MemberInfo";

function ClientMy() {
  const [adminPage, setAdminPage] = useState(false);
  const [member, setMember] = useState({});

  useEffect(() => {
    accessClient.get('/api/client/token/mypage')
    .then((res) => {
      const accessMember = res.data;

      console.log(accessMember);
      setMember(accessMember);
      //사업자 회원인 경우 매장관리 페이지 권한부여
      if(accessMember.businessMember !== null){
        setAdminPage(true);
      }
    }).catch((err) => {
      alert(err.response.data.detail)
      window.history.back();
    });
  }, []);
  return (
    <>
      <Topbar />
      <ClientContainer>
        <MemberCard member={member}/>
        <MemberInfo />
        <BottomMenu
          adminPage={adminPage}
        />
      </ClientContainer>
      <Footer />
    </>
  )
}

export default ClientMy;