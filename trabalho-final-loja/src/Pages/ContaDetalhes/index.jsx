import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import http from '../../http'
import Titulo from "../../Components/Titulo";

const ContaDetalhes = () => {

    const [cliente, setCliente] = useState({});
    const history = useHistory();

    const [endereco, setEndereco] = useState("");

    const editarDados = () => {
        history.push('/conta/editar')
    }

    useEffect(() => {
        const idCliente = localStorage.getItem('idCliente')

        http.get('cliente/' + idCliente)
            .then(response => {
                setCliente(response.data);
                console.log(response.data);
                setEndereco(`${response.data.endereco.rua}, ${response.data.endereco.numero} - ${response.data.endereco.bairro}, ${response.data.endereco.cidade} - ${response.data.endereco.estado}, ${response.data.endereco.cep}`);
            });
    }, [])

    const excluirConta = () => {
        alert("Tem certeza que deseja excluir sua conta?");
    }

    return (
        <div>
            <Titulo>Detalhes da conta</Titulo>
            <form>
                <label className="form-label">Nome: </label>
                <input className="form-control" type="text" value={cliente.nome} aria-label="Disabled input example" disabled readOnly></input>
                <label className="form-label">Username: </label>
                <input className="form-control" type="text" value={cliente.usuario} aria-label="Disabled input example" disabled readOnly></input>
                <label className="form-label">Email: </label>
                <input className="form-control" type="text" value={cliente.email} aria-label="Disabled input example" disabled readOnly></input>
                <label className="form-label">Data de nascimento: </label>
                <input className="form-control" type="text" value={cliente.dataNascimento} aria-label="Disabled input example" disabled readOnly></input>
                <label className="form-label">CPF: </label>
                <input className="form-control" type="text" value={cliente.cpf} aria-label="Disabled input example" disabled readOnly></input>
                <label className="form-label">Telefone: </label>
                <input className="form-control" type="text" value={cliente.telefone} aria-label="Disabled input example" disabled readOnly></input>
                
                <label className="form-label">Endereço: </label>
                <input className="form-control" type="text" value={endereco} aria-label="Disabled input example" disabled readOnly></input>
            </form>
            <button className="btn btn-dark fw-bold d-grid gap-2 col-2 mx-auto my-5" onClick={editarDados}>Editar dados</button>
            <button className="btn btn-danger fw-bold d-grid gap-2 col-2 mx-auto my-5" onClick={excluirConta}>Excluir conta</button>
        </div>
    )
}

export default ContaDetalhes;