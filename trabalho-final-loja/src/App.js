import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Cadastro from './Pages/Cadastro'

function App() {
  return (
    <BrowserRouter>
      
      <Switch>        
        <Route exact path="/cadastro">
          <Cadastro />
        </Route>        
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
