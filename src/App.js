import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Menu from './Components/Menu';

function App() {
  return (
    <HashRouter>
      <Container fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>

        <Row>
          <Col>
            <Menu />
          </Col>
        </Row>

        <Routes>
          <Route exact path = '/register' element={<Register />}>
          </Route>

          <Route exact path = '/login' element={<Login />}>
          </Route>

          <Route exact path = '/' element={<Home />}>
          </Route>
        </Routes>

        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </HashRouter>
  );
}

export default App;
