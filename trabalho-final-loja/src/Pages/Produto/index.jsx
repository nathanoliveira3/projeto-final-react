import http from '../../http'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './estilos.css'
const Produto = () => {
    const { id } = useParams()
    const [produto, setProduto] = useState({})

    useEffect(() => {
        http.get('produto/' + id)
            .then(response => setProduto(response.data))
    }, [id])

    return (

        <div className="card mb-3 mx-auto card-produto">
            <div className="row">
                <div className="col-md-8">
                    <img src="..." className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-4">
                    <div className="card-body">
                        <h5 className="card-title">{produto.nome}</h5>
                        <p className="card-text">{produto.descricao}</p>
                        <h5 className="card-title">R${produto.preco}</h5>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Produto
