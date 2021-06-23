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
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/produtos">Produtos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/servicos">Serviços</Link>
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
        <nav className="navbar navbar-expand-md">
            <div>
                <ul className="navbar-nav mr-auto">
                    {Itens()}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;