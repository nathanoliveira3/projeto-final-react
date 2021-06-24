import { useState, useEffect } from 'react'
import http from '../../http';
import { useHistory } from "react-router-dom";
import Titulo from '../../Components/Titulo';
import { Link } from 'react-router-dom';

const NovaSenha = () => {

    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    const alterarSenha = (evento) => {
        const dados = {
            cpf: cpf,
            senha: senha
        }
        http.post('cliente/recuperacao', dados)
            .then(response => {
                console.log(response.data);
            });

        history.push('/login');
    }

    return (
        <div className="mx-auto">
            <Titulo>
                Alterar senha
            </Titulo>

            <form className="container" onSubmit={alterarSenha}>
                <div className="mb-3 col-lg-4 col-md-10 col-sm-12 mx-auto">
                    <label className="form-label">Informe seu CPF</label>
                    <input className="form-control" required value={cpf} onChange={e => setCpf(e.target.value)} type="text" />
                </div>
                <div className="mb-3 col-lg-4 col-md-10 col-sm-12 mx-auto">
                    <label className="form-label">Informe a nova senha</label>
                    <input className="form-control" required value={senha} onChange={e => setSenha(e.target.value)} type="password" />
                </div>
                <div className="col-lg-4 col-md-10 col-sm-12 fw-bold d-grid mx-auto">
                    <button className="btn btn-dark my-2">Alterar</button>
                </div>
            </form>
        </div>
    )
}

export default NovaSenha;