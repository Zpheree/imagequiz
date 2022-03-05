import './App.css';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/register'>
          <Register />
          </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
