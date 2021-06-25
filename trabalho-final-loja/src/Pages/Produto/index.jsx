import http from '../../http'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './estilos.css'
import MensagemSucesso from '../../Components/MensagemSucesso'
import Titulo from '../../Components/Titulo'
const Produto = () => {
    const { id } = useParams()
    const [produto, setProduto] = useState({})
    const [mensagem, setMensagem] = useState('')

    const formatter = new Intl.NumberFormat('pr-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    useEffect(() => {
        http.get('produto/' + id)
            .then(response => setProduto(response.data))
    }, [id])

    const enviarCarrinho = () => {
        const carrinho = {
            usuario: localStorage.getItem('user'),
            codigoProduto: produto.codigo,
            quantidade: 1
        }
        http.put('carrinho', carrinho)
            .then(() => {
                setMensagem('Produto adicionado ao carrinho!')
                setTimeout(() => {
                    setMensagem('')
                }, 4500)
            })

    }

    return (
        <div>
            <Titulo>{produto.nome}</Titulo>
            {mensagem && <MensagemSucesso msg={mensagem} />}
            <div className="card mb-3 mx-auto card-produto">                
                <div className="row">
                    <div className="col-md-8">
                        <img src={produto.imagem} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-4">
                        <div className="card-body">
                            <h5 className="card-title">{produto.nome}</h5>
                            <p className="card-text">{produto.descricao}</p>
                            <h5 className="card-title">{formatter.format(produto.preco)}</h5>
                        </div>
                        <div>
                            <button className="btn btn-dark" onClick={enviarCarrinho}>Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Produto
