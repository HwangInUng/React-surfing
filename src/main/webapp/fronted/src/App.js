import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Login from "./routes/Login";
import Main from "./main/Main";

function App() {
  return (
    <Container fluid className="p-0">
      <Router>
        <Routes>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/" element={<Login />}></Route>  
        </Routes>        
      </Router>
    </Container>
  );
}

export default App;
