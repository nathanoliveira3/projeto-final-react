import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Cadastro from './Pages/Cadastro'
import Footer from './Components/Footer'
import Page404 from './Pages/Page404'
import Navbar from './Components/Navbar'
import Login from './Pages/Login'
import Produtos from './Pages/Produtos';
import Home from './Pages/Home'
import Produto from './Pages/Produto'
import Carrinho from './Pages/Carrinho'
import Pedidos from './Pages/Pedidos';
import ContaDetalhes from './Pages/ContaDetalhes';
import ContaEdit from './Pages/ContaEdit';
function App() {

  const [token, setToken] = useState('');

  useEffect(() => {
    const tokenAntigo = localStorage.getItem('token')
    if (tokenAntigo) {
      setToken(tokenAntigo)
    }
  }, [])

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
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/cadastro">
              <Cadastro />
            </Route>
            <Route exact path="/login">
              <Login aoLogin={aoLogin} />
            </Route>
            <Route exact path="/produtos">
              <Produtos />
            </Route>
            <Route path="/produtos/:id">
              <Produto />
            </Route>
            <Route path="/carrinho/:id">
              <Carrinho />
            </Route>
            <Route path="/pedidos/:id">
              <Pedidos />
            </Route>
            <Route exact path="/conta">
              <ContaDetalhes aoLogout={logout} />
            </Route>
            <Route path="/conta/editar">
              <ContaEdit />
            </Route>
            <Route>
              <Page404 />
            </Route>

          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
