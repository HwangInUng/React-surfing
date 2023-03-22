import axios from "axios";
import { useEffect } from "react";
import ClientContainer from "../../common/ClientContainer";
import Footer from "../main/Footer";
import Topbar from "../main/topbar/Topbar";
import BottomMenu from "./BottomMenu";
import MemberCard from "./MemberCard";
import MemberInfo from "./MemberInfo";

function ClientMy() {
  useEffect(() => {
    axios.get('/api/client/token/my',{
      headers:{
        "Authorization": "Bearer " + localStorage.getItem("accessToken"),
        "Content-Type" : "application/json"
      }
    }).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      alert(err.response.data.detail)
      window.history.back();
    });
  }, []);
  return (
    <>
      <Topbar />
      <ClientContainer>
        <MemberCard />
        <MemberInfo />
        <BottomMenu />
      </ClientContainer>
      <Footer />
    </>
  )
}

export default ClientMy;