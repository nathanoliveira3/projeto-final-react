import './estilos.css'
const CardPedido = (props) => {

    const formatter = new Intl.NumberFormat('pr-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    return (
        <div className="col-lg-6 col-md-6 col-sm-10 mx-auto mt-5">
            <div className="card card-pedido pt-0 mx-auto">
                <div className="card-header">
                    Codigo: {props.codigo}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{formatter.format(props.valor)}</h5>
                    <ul className="list-group mt-3">
                        Produtos {props.produto}
                    </ul>
                    <p className="card-text mt-4">Status do Pedido: {props.status}</p>

                </div>
            </div>
        </div>
    )
}

export default CardPedido