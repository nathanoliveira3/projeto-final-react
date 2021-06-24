import { useEffect, useState } from "react"
import { useParams } from "react-router"
import http from "../../http"
import CardPedido from "../../Components/CardPedido"
import Titulo from "../../Components/Titulo"


const Pedidos = () => {
    const { id } = useParams()
    const [pedidos, setPedidos] = useState([{ produtos: [] }])

    useEffect(() => {
        http.get('pedido/' + id)
            .then(response => setPedidos(response.data))
    }, [id])

    return (

        <div className="row">
            <Titulo> Pedidos </Titulo>
            {pedidos.map((item, index) => {
                return <CardPedido key={index} status={item.status} codigo={item.codigo} valor={item.valor} produto={item.produtos.map((produto, index) => <li className="list-group-item" key={index}>{produto}</li>)} />
            })}

        </div>
    )
}

export default Pedidos