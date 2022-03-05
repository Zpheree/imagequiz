import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path = '/register' element={<Register />}>
        </Route>

        <Route exact path = '/login' element={<Login />}>
        </Route>

        <Route exact path = '/' element={<Home />}>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
