import { useEffect, useState } from "react"
import { useHistory } from "react-router";
import http from '../../http'
import Titulo from "../Titulo";

const FormEditEndereco = () => {

    const [cep, setCep] = useState('28614090');
    const [numero, setNumero] = useState('269');
    const [complemento, setComplemento] = useState('Sei lá');
    const [cliente, setCliente] = useState({});

    const history = useHistory()

    useEffect(() => {
        const idCliente = localStorage.getItem('idCliente')

        http.get('cliente/' + idCliente)
            .then(response => {
                setCliente(response.data);
                setCep(response.data.endereco.cep);
                setNumero(response.data.endereco.numero);
                setComplemento(response.data.endereco.complemento);
            });
    }, [])

    const salvar = (evento) => {
        evento.preventDefault()

        const atualizado = cliente;

        const endereco = {}
        endereco.cep = cep;
        endereco.numero = numero;
        endereco.complemento = complemento;

        atualizado.endereco = endereco;

        http.put('cliente/' + cliente.id, atualizado)
            .then(response => {
                console.log(response.data)
            })
        history.push("/conta")
        window.location.reload()
    }

    return (
        <form onSubmit={salvar} className='col-6 mx-auto'>

            <Titulo>Endereço</Titulo>

            <div className="mb-3">
                <label className="form-label">CEP</label>
                <input className="form-control" type="text" value={cep} onChange={(evento) => setCep(evento.target.value)} />
            </div>

            <div className="mb-3">
                <label className="form-label">Numero</label>
                <input className="form-control" type="text" value={numero} onChange={(evento) => setNumero(evento.target.value)} />
            </div>

            <div className="mb-3">
                <label className="form-label">Complemento</label>
                <input className="form-control" type="text" value={complemento} onChange={(evento) => setComplemento(evento.target.value)} />
            </div>

            <button className="btn btn-dark fw-bold d-grid gap-2 col-6 mx-auto my-5">Salvar</button>
        </form>
    )
}

export default FormEditEndereco;