import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import http from '../../http'
import Titulo from "../../Components/Titulo";

const ContaDetalhes = ({ aoLogout }) => {

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
        const cpf = { cpf: cliente.cpf }
        http.put('cliente/status', cpf)
            .then(response => {
                console.log(response.data);
            });
        aoLogout();
        history.push('/')
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
            <button className="btn btn-danger fw-bold d-grid gap-2 col-2 mx-auto my-5" data-bs-toggle="modal" data-bs-target="#excluirContaModal">Excluir conta</button>

            <div className="modal fade" id="excluirContaModal" tabindex="-1" aria-labelledby="excluirContaModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="excluirContaModalLabel">Você está prestes a excluir sua conta!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Tem certeza de que deseja continuar?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={excluirConta}>Excluir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContaDetalhes;