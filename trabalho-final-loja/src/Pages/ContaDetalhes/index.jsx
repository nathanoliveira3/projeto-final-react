
import { useHistory } from "react-router-dom";

const ContaDetalhes = () => {
    
    const history = useHistory()

    const editarDetalhes = () => {
        history.push('/conta/editar')
    }

    const excluirConta = () => {
        alert("Tem certeza que deseja excluir sua conta?");
    }

    return (
        <div>
            <button className="btn btn-dark fw-bold d-grid gap-2 col-2 mx-auto my-5" onClick={editarDetalhes}>Editar detalhes</button>
            <button className="btn btn-danger fw-bold d-grid gap-2 col-2 mx-auto my-5" onClick={excluirConta}>Excluir conta</button>
        </div>
    )
}

export default ContaDetalhes;