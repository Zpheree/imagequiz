import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import FederatedLogin from './Components/FederatedLogin';
import Register from "./Components/Register";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NavMenu from "./Components/Menu";
import Quiz from "./Components/Quiz";
import { useState } from "react";
import { useParams } from "react-router-dom";


function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));

  let customerLoggedInHandler = (customerEmail) => {
      localStorage.setItem("user", customerEmail);
      setUser(customerEmail);
  }

  let customerLoggedOutHandler = () => {
      localStorage.removeItem("user");
      setUser(undefined);
  }

  return (
    <div className="App">

      <HashRouter>
        <Container fluid>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col>
              <NavMenu user={user} customerLoggedOut={customerLoggedOutHandler}/>
            </Col>
          </Row>

          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/login/:from" element={<Login customerLoggedIn={customerLoggedInHandler} />}>
            </Route>
            <Route path="/login" element={<Login customerLoggedIn={customerLoggedInHandler} />}>
            </Route>
            <Route path='/google/:username/:name' element={<FederatedLogin provider="google" customerLoggedIn={customerLoggedInHandler} />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>
            <Route path="/quiz/:id" element={
              <ProtectedRoute user={user}><Quiz user={user}/></ProtectedRoute>
            }>
            </Route>
          </Routes>

          <Row>
            <Col>
              <Footer />
            </Col>
          </Row>

        </Container>
      </HashRouter>
    </div>
  );
}

const ProtectedRoute = ({ user, children }) => {
    const { id } = useParams();
    if (user) {
        return children;
    } else {
        return <Navigate to={`/login/${id}`} />;
    }
}

export default App;