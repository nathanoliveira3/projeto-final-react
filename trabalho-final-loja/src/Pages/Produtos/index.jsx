import { useEffect, useState } from 'react'
import http from '../../http'
import Card from '../../Components/Card'

const Produtos = () => {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        http.get('produto')
        .then(response => {
            console.log(response.data)
            setProdutos(response.data)
        })
    }, [])

    const enviarCarrinho = (codigo) => {
        const carrinho = {
            usuario: localStorage.getItem('user'),
            codigoProduto: codigo,
            quantidade: 1
        }
        http.put('carrinho', carrinho)
        .then(response => console.log(response.data))
    }

    return (
        <div>
            {produtos.map((produto, index) => {
              return  <Card key={index} nome={produto.nome} preco={produto.preco} id={produto.id} codigo={produto.codigo} enviar={enviarCarrinho} /> 
            })}
        </div>   
    )
    
}

export default Produtos