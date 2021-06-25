import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import http from "../../http"
import MensagemErro from "../Login/MensagemErro"

const Carrinho = () => {
    const { id } = useParams()
    const [carrinho, setCarrinho] = useState({ produtos: [] })
    
    useEffect(() => {
        http.get('carrinho/' + id)
            .then(response => setCarrinho(response.data))
    }, [id])

    const fecharPedido = () => {
        const finalizar = {
            codigo: carrinho.codigo
        }

        http.post('carrinho/finalizar', finalizar)
            .then(
                
            )
    }
    console.log(carrinho)

    return (
        <div className="col-lg-6 col-md-6 col-sm-10 mx-auto mt-5">
            
            <div className="card card-pedido pt-0">
                <div className="card-header">
                    Cliente: {carrinho.cliente}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Total - R$ {carrinho.valor}</h5>
                    <ul className="list-group my-5">
                        {carrinho.produtos.map((item, index) => <li className="list-group-item" key={index}>{item.nome} - {item.preco} </li>)}
                    </ul>
                    <div className="row">
                        <a href={`http://localhost:3000/pedidos/${localStorage.getItem('idCliente')}`} className="btn btn-dark col-5 mx-3 " onClick={fecharPedido}>Comprar</a>
                    </div>               
                </div>
            </div>
        </div>

    )
}
export default Carrinho