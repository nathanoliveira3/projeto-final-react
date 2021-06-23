import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useState } from 'react';

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Cadastro from './Pages/Cadastro'

import Navbar from './Components/Navbar';
import Cadastro from './Pages/Cadastro'
import Carrinho from './Pages/Carrinho'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Produto from './Pages/Produto'
import Produtos from './Pages/Produtos'

function App() {

  const [token, setToken] = useState('');

  const aoLogin = (token) => {
    setToken(token);
  }

  const logout = () => {
    setToken('');
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar token={token} aoLogout={logout} />
        <div className="container">
          <Switch>
            {/* <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cadastro">
              <Cadastro />
            </Route>
            <Route path="/login">
              <Login onLogin={aoLogin} />
            </Route>
            <Route exact path="/produtos">
              <Produtos />
            </Route>
            <Route path="/produto/:id">
              <Produto />
            </Route>
            <Route path="/carrinho">
              <Carrinho />
            </Route>
            <Route>
              <Pagina404 />
            </Route> */}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
