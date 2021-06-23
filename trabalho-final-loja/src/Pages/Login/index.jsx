import { useState, useEffect } from 'react'
import http from '../../http'
import { useHistory } from "react-router-dom";
import Titulo from '../../Components/Titulo';
import MensagemErro from './MensagemErro'

const Login = ({aoLogin}) => {

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
            username: username,
            senha: senha
        }
        http.post(`auth`, usuario)
            .then(response => {
                console.log(response.data)
                localStorage.setItem('token', response.data.access_token)
                aoLogin(response.data.user, response.data.access_token)
                history.push('/')
            })
            .catch(erro => {
                console.log('Algo deu errado')
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
        <>
            <Titulo>
                Login
            </Titulo>

            { mensagem && <MensagemErro msg={mensagem} /> }

            <form onSubmit={efetuarLogin}>
                <label>Username</label>
                <input required value={username} onChange={e => setUsername(e.target.value)} type="text" />
                <label>Senha</label>
                <input required value={senha} onChange={e => setSenha(e.target.value)} type="password" />

            </form>

        </>
    )

}


export default Login