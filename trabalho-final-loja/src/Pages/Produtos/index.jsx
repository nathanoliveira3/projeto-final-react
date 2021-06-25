import { useEffect, useState } from 'react'
import http from '../../http'
import Card from '../../Components/Card'
import MensagemSucesso from '../../Components/MensagemSucesso'
import Titulo from '../../Components/Titulo'

const Produtos = () => {

    const [produtos, setProdutos] = useState([])
    const [mensagem, setMensagem] = useState('')

    const formatter = new Intl.NumberFormat('pr-BR', {
        style: 'currency',
        currency: 'BRL'
    })

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
            .then(() => {
                setMensagem('Produto adicionado ao carrinho!')
                setTimeout(() => {
                    setMensagem('')
                }, 4500)
            })
        
    }

    return (

        <div className="row">
            <Titulo>Produtos</Titulo>
            {mensagem && <MensagemSucesso msg={mensagem} />}
            {produtos.map((produto, index) => {
              return  <Card key={index} imagem={produto.imagem} nome={produto.nome} preco={formatter.format(produto.preco)} id={produto.id} codigo={produto.codigo} enviar={enviarCarrinho} /> 
            })}
             
        </div>   
    )
    
}

export default Produtos