import { Route, Routes } from "react-router-dom";
import { accessClient } from "../App";
import styled from "styled-components";
import DashBoardMain from "../components/admin/home/DashBoardMain";
import Sidebar from "../components/admin/main/sidebar/Sidebar";
import Topbar from "../components/admin/main/topbar/Topbar";
import Sales from "../components/admin/sales/Sales";
import ShopForm from "../components/admin/shop/ShopForm";
import Shop from "../components/admin/shop/Shop";
import { useEffect } from "react";
import { useState } from "react";
import Bt from "../components/common/Bt";
import MenuList from "../components/admin/shop/MenuList";
import TrainerList from "../components/admin/shop/TrainerList";

const Container = styled.div`
  display: flex;

  .right{
    flex: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    padding-top: 20px;
  }
  .center{
    text-align: center;
  }
`;

function Admin() {
  /*-----------------------------------------
    사업자 회원의 경우 매장을 보유여부를 확인
  -------------------------------------------*/
  const [haveShop, setHaveShop] = useState(false);
  const [regist, setRegist] = useState(false);
  const [shop, setShop] = useState({});

  /*-----------------------------------------
  로그인 시 등록된 사업자 번호를 호출
  사업자 번호를 통해 매장 보유 여부 확인
  -------------------------------------------*/
  useEffect(() => {
    const businessIdx = localStorage.getItem("businessIdx");
    /*-----------------------------------------
    사업자 번호를 통해 관리자페이지 접속과
    동시에 매장정보 획득
    -------------------------------------------*/

    accessClient.get(`/api/admin/${businessIdx}`)
      .then((res) => {
        setShop(res.data);
        console.log(res.data);
        if (res.data !== '') {
          setHaveShop(true);
        }
      });
  }, []);
  return (
    <div>
      <Topbar />
      <Container>
        <Sidebar />
        {haveShop ? //샵을 보유하고 있지 않은 경우 매장등록 후 사용하도록 유도
          <div className="right">
            {/* 해당 위치에 서브로 보여질 라우팅 대상 컴포넌트 등록 */}
            <Routes>
              <Route path="/" element={<DashBoardMain />}></Route>
              <Route path="/sales" element={<Sales />}></Route>
              <Route path="/shop" element={<Shop shop={shop}/>}></Route>
              <Route path="/trainer" element={<TrainerList shopIdx={shop.shopIdx}/>}></Route>
              <Route path="/menu" element={<MenuList shopIdx={shop.shopIdx}/>}></Route>
            </Routes>
          </div>
          :
          <div className="right">
            {regist ? //매장 등록 버튼을 누르면 매장등록UI 출력
              <ShopForm /> :
              <div className="center">
                <h3>등록된 매장이 없습니다.</h3>
                <Bt
                  btName="등록하러가기"
                  onClick={() => setRegist(true)}
                />
              </div>
            }
          </div>
        }
      </Container>
    </div>
  );
}

export default Admin;