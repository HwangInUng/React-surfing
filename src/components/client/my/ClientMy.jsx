import { useEffect, useState } from "react";
import { accessClient } from "../../../App";
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
    accessClient.get(`${process.env.REACT_APP_REQUEST_URL}/api/client/token/mypage`)
    .then((res) => {
      //접속한 멤버 정보 추출
      const accessMember = res.data;

      console.log(accessMember);
      setMember(accessMember);
      //사업자 회원인 경우 매장관리 페이지 권한부여를 위한 논리값 전환
      if(accessMember.businessMember !== null){
        setAdminPage(true);
        console.log(accessMember.businessMember.businessIdx);
        localStorage.setItem("businessIdx", accessMember.businessMember.businessIdx);
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