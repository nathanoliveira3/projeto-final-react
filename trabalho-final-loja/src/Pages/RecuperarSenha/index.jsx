import { useState, useEffect } from 'react'
import http from '../../http';
import { useHistory } from "react-router-dom";
import Titulo from '../../Components/Titulo';
import { Link } from 'react-router-dom';

const RecuperarSenha = () => {

    const [email, setEmail] = useState('');

    const enviarEmail = (evento) => {

        evento.preventDefault();

        const recuperacaoSenha = {email: email};

        http.post('cliente/email', recuperacaoSenha)
            .then(response => {
                console.log(response.data);
            })
    }

    return (
        <div className="mx-auto">
            <Titulo>
                Recuperar senha
            </Titulo>

            <form className="container" onSubmit={enviarEmail}>
                <div className="mb-3 col-lg-4 col-md-10 col-sm-12 mx-auto">
                    <label className="form-label">Informe seu email</label>
                    <input className="form-control" required value={email} onChange={e => setEmail(e.target.value)} type="text" />
                </div>
                <div className="col-lg-4 col-md-10 col-sm-12 fw-bold d-grid mx-auto">
                    <button className="btn btn-dark my-2">Enviar email</button>
                </div>
            </form>
        </div>
    )
}

export default RecuperarSenha;