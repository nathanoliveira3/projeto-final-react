import { useState, useEffect } from 'react'
import http from '../../http'
import { useHistory } from "react-router-dom";
import Titulo from '../../Components/Titulo';
import MensagemErro from './MensagemErro'
import { Link } from 'react-router-dom';


const Login = ({ aoLogin }) => {

    const [mensagem, setMensagem] = useState('')
    const [username, setUsername] = useState('')
    const [senha, setSenha] = useState('')
    const history = useHistory()

    useEffect(() => {
        localStorage.removeItem('token')
    }, [])

    const efetuarLogin = (e) => {
        e.preventDefault()
        const usuario = {
            user: username,
            pass: senha
        }
        http.post(`auth`, usuario)
            .then(response => {
                console.log(response.data)
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user', response.data.user)
                localStorage.setItem('idCliente', response.data.idCliente)
                aoLogin(response.data.user, response.data.token)
                history.push('/')
            })
            .catch(erro => {
                console.log(erro)
                if (erro.response.data && erro.response.data.message) {
                    setMensagem(erro.response.data.message)
                } else {
                    setMensagem('OPS... um erro não esperado.')
                }
                setTimeout(() => {
                    setMensagem('')
                }, 4500);
            })

        setUsername('')
        setSenha('')
    }

    return (
        <div className="mx-auto">
            <Titulo>
                Login
            </Titulo>

            {mensagem && <MensagemErro msg={mensagem} />}

            <form className="container" onSubmit={efetuarLogin}>
                <div className="mb-3 col-lg-4 col-md-10 col-sm-12 mx-auto">
                    <label className="form-label">Username</label>
                    <input className="form-control" required value={username} onChange={e => setUsername(e.target.value)} type="text" />
                </div>
                <div className="mb-3 col-lg-4 col-md-10 col-sm-12 mx-auto">
                    <label className="form-label">Senha</label>
                    <input className="form-control mb-4" required value={senha} onChange={e => setSenha(e.target.value)} type="password" />
                </div>
                <div className="col-lg-4 col-md-10 col-sm-12 fw-bold d-grid mx-auto">
                    <button className="btn btn-dark my-2">Entrar</button>
                    <Link to="/cadastro" className="btn btn-outline-dark my-1 mb-5">Cadastrar</Link>
                </div>
            </form>
        </div>
    )

}


export default Login