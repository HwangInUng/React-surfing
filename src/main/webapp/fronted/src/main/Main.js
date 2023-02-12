import { Col, Row } from "react-bootstrap";
import TopNav from "./TopNav";
import SideNav from "./SideNav";
import Center from "./Center";

function Main() {
  return (
    <Row>
      <Col md={2} className="vh-100 p-0">
        <SideNav />
      </Col>
      <Col md={10}  className="vh-100">
        <Row className="vh-5">
          <TopNav />
        </Row>
        <Row className="vh-95">
          {/* 메인 컨텐츠 위치 */}
          <Center />
        </Row>
      </Col>
    </Row>
  );
}

export default Main;