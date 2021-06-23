import { useEffect, useState } from "react"
import http from "../../http"

const Carrinho = () => {    
    const [carrinho, setCarrinho] = useState([])
    

    const obterCarrinho = () => {
        http.get('carrinho')
            .then(response => {               
                setCarrinho(response.data)                
            })
    }

    useEffect(() => {
        obterCarrinho()
    }, [])

   //console.log(carrinho)

    return (
        <div>
            {carrinho.map((item, indice)  => {
                console.log(item.nome)
                return <p key={indice}>{item.nome}</p>
            })}   
        </div>
    )
}
export default Carrinho