import { useEffect, useState } from "react"
import http from '../../http'
import Titulo from "../Titulo";

const FormEditDetalhesConta = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cliente, setCliente] = useState({});

    useEffect(() => {
        const idCliente = localStorage.getItem('idCliente')

        http.get('cliente/' + idCliente)
            .then(response => {
                setCliente(response.data);
                setNome(response.data.nome);
                setEmail(response.data.email);
                setTelefone(response.data.telefone);
            });
    }, [])

    const salvar = (evento) => {
        evento.preventDefault()

        const atualizado = cliente;

        atualizado.nome = nome;
        atualizado.email = email;
        atualizado.telefone = telefone;

        http.put('cliente/' + cliente.id, atualizado)
            .then(response => {
                console.log(response.data);
            })
    }

    return (
        <form onSubmit={salvar} className='col-6 mx-auto'>

            <Titulo>Editar dados</Titulo>

            <div className="mb-3">
                <label className="form-label">Nome</label>
                <input className="form-control" type="text" value={nome} onChange={(evento) => setNome(evento.target.value)} />
            </div>

            <div className="mb-3">
                <label className="form-label">Email</label>
                <input className="form-control" type="text" value={email} onChange={(evento) => setEmail(evento.target.value)} />
            </div>

            <div className="mb-3">
                <label className="form-label">Telefone</label>
                <input className="form-control" type="text" value={telefone} onChange={(evento) => setTelefone(evento.target.value)} />
            </div>

            <button className="btn btn-dark fw-bold d-grid gap-2 col-6 mx-auto my-5">Salvar</button>
        </form>
    )
}

export default FormEditDetalhesConta;