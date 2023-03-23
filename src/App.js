import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Admin from "./routes/Admin";
import Client from "./routes/Client";
import axios from "axios";

//인증필요
export const accessClient = axios.create({
  headers:{
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
  }
});
//인증 불필요 클라이언트
export const client = axios.create({
  headers:{
    "Content-Type": "application/json",
  }
});


function App() {
  return (
    <Container fluid className="p-0">
      <Router>
        <Routes>
          {/* 중첩 라우팅을 위하여 와일드카드(*)명시 */}
          {/* <Route path="/" element={<Login />}></Route> */}
          <Route path="/*" element={<Client />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
