import { Container, Form, Navbar } from "react-bootstrap";
import Bt from "../components/common/Bt";

function TopNav() {
  const search = () => {
    console.log("검색!!")
  }
  return (
    <Navbar bg="dark">
      <Container fluid style={{color: "white"}}>
        userName / accessTime
        <Form>
          <Container className="d-flex">
            <Form.Control
              type="search"
              placeholder="검색어 입력"
              className="me-2"
              aria-label="Search"
            >
            </Form.Control>
            <Bt
              color="secondary"
              onClick={search}
              btName="Search"
            />
          </Container>
        </Form>
      </Container>
    </Navbar >
  );
}

export default TopNav;