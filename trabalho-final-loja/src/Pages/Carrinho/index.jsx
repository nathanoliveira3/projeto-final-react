import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import http from "../../http"
import MensagemErro from "../Login/MensagemErro"
import Titulo from '../../Components/Titulo'

const Carrinho = () => {
    const { id } = useParams()
<<<<<<< HEAD
    const [carrinho, setCarrinho] = useState({ produtos: [] })    


=======
    const [carrinho, setCarrinho] = useState({ produtos: [] })
    
>>>>>>> 500ca334ae259aa22e6f98183e01884cea27c377
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
    
    const deletar = () => {
        http.delete('carrinho/' + id)
        .then(setCarrinho())
    }

    
    console.log(carrinho)
    return (
        <div className="col-lg-6 col-md-6 col-sm-10 mx-auto mt-5">
           <Titulo>Carrinho</Titulo> 
            <div className="card card-pedido pt-0">
                <div className="card-header">
                    Cliente: {carrinho.cliente}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Total - R$ {carrinho.valor}</h5>
                    <ul className="list-group my-5">
                        {carrinho.produtos.map((item, index) => <li className="list-group-item" key={index}>{item.nome} - R${item.preco} - Quantidade:{localStorage.getItem('quant') } </li>)}
                    </ul>
                    <select className="form-select mb-4" name="" id="">
                        <option value="">Selecione a forma de pagamento</option>
                        <option value="Credito">Crédito</option>
                        <option value="Debito">Débito</option>
                        <option value="Boleto">Boleto</option>
                        <option value="Pix">Pix</option>
                    </select>
                    <div className="row">
                        <a href={`http://localhost:3000/pedidos/${localStorage.getItem('idCliente')}`} className="btn btn-dark col-5 mx-3 " onClick={fecharPedido}>Comprar</a>
                        <a href="http://localhost:3000/produtos" className="btn btn-dark col-5 mx-3 " onClick={deletar}>Deletar Carrinho</a>
                    </div>               
                </div>
            </div>
        </div>

    )
}
export default Carrinho