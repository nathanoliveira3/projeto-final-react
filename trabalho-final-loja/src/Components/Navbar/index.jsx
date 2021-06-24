import { Link, useHistory } from 'react-router-dom'

const Navbar = ({ token, aoLogout }) => {

    const history = useHistory();

    const logout = () => {
        history.push('/login');
        aoLogout();
    }

    const Itens = () => {
        if (token) {
            return (
                <>
                    <li className="nav-item">
                        <Link className="nav-link btn btn-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/produtos">Produtos</Link>
                    </li> 
                    <li className="nav-item">
                        <Link className="nav-link" to={`/carrinho/${localStorage.getItem('idCliente')}`}>Carrinho</Link>
                    </li>  
                    <li className="nav-item">                      
                        <Link className="nav-link btn btn-link" to="/produtos">Produtos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link btn btn-link" to="/conta">Conta</Link>
                    </li>                   
                    <li className="nav-item">
                        <button className="nav-link btn btn-link" onClick={logout}>Logout</button>
                    </li>
                </>
            )
        }
        return <>
            <li className="nav-item">
                <Link className="nav-link" to="login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="cadastro">Cadastre-se</Link>
            </li>
        </>
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav mr-auto me-auto mb-2 mb-lg-0">
                        {Itens()}
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-dark" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;