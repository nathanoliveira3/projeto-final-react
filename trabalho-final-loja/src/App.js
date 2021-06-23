import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Cadastro from './Pages/Cadastro'
import Footer from './Components/Footer'
import Page404 from './Pages/Page404'
import Navbar from './Components/Navbar'
import Login from './Pages/Login'
<<<<<<< HEAD
import Produtos from './Pages/Produtos';
=======
import Home from './Pages/Home'
>>>>>>> a77ce3dd63ec4ee0474152493cf81d97dd636aa2

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
            <Route>
              <Page404 />
            </Route>            
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
