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

    return (
        <div>
            {produtos.map((produto, index) => {
              return  <Card key={index} nome={produto.nome} preco={produto.preco} /> 
            })}
        </div>   
    )
    
}

export default Produtos