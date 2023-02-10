import { Nav } from "react-bootstrap";
import styled from "styled-components";
import { SiHomeassistantcommunitystore } from "react-icons/si"
import { SlCalender } from "react-icons/sl"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { GiSurfBoard } from "react-icons/gi"
import { MdProductionQuantityLimits } from "react-icons/md"

const Menu = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

function SideNav() {
  const navNames = [
    { name: "Home", path: "/main", icon: <SiHomeassistantcommunitystore /> },
    { name: "회원관리", path: "", icon: <BsFillPersonLinesFill /> },
    { name: "라이딩기록", path: "", icon: <GiSurfBoard /> },
    { name: "상품관리", path: "", icon: <MdProductionQuantityLimits /> },
    { name: "예약관리", path: "", icon: <SlCalender /> },
  ];
  return (
      <Nav className="vh-100 flex-column bg-dark">
        <Nav.Item className="mb-1 mt-1">
          <Nav.Link href="/" style={{ color: "white" }}>
          <img
            src="/img/logo.png"
            alt="..."
            width="30"
            height="30"
            className="d-inline-blocke align-top rounded-5"
          />{' '}
          Admin Page
          </Nav.Link>
        </Nav.Item>
        <hr className="m-0" style={{color: "white"}}/>
        <Menu>
          {/* 배열에 저장된 객체 수만큼 해당 컴포넌트를 렌더링 */}
          {navNames.map((navName, index) => {
            return (
              <Nav.Link exact="true"
                style={{ color: "white", textDecoration: "none"}}
                href={navName.path}
                key={index}
              >
                {navName.icon}{' '}
                {navName.name}
              </Nav.Link>
            );
          })};
        </Menu>
      </Nav>
  );
}

export default SideNav;