import { useState } from "react"
import http from '../../http'

const FormEditEndereco = () => {

    const [cep, setCep] = useState('28614090');
    const [numero, setNumero] = useState('269');
    const [complemento, setComplemento] = useState('Sei lá');

    const salvar = (evento) => {
        evento.preventDefault()

        const idCliente = localStorage.getItem('idCliente')
        console.log(idCliente);
        // const atualizado = {};
        
        // http.get('cliente/:id', idCliente)
        //     .then(response =>{
        //         console.log(response.data);
        //     })

        // const endereco = {}
        // endereco.cep = cep;
        // endereco.numero = numero;
        // endereco.complemento = complemento;

        

        // http.put('cliente', atualizado)
        //     .then(response => {
        //         console.log(response.data)                
                
        //     })
    }

    return (
        <form onSubmit={salvar} className='col-6 mx-auto'>
            <h2 className="text-center">Endereço</h2>

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