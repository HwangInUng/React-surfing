import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Login from "./routes/Login";
import Main from "./routes/Main";

function App() {
  return (
    <Container fluid className="p-0">
      <Router>
        <Routes>
          {/* 중첩 라우팅을 위하여 와일드카드(*)명시 */}
          <Route path="/" element={<Login />}></Route>  
          <Route path="/main/*" element={<Main />}></Route>
        </Routes>        
      </Router>
    </Container>
  );
}

export default App;
