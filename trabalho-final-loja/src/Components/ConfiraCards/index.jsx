import './estilos.css'

const ConfiraCards = () => {

    return (
        <div className="container mb-3">
            <div className="row">
                <div className="col-sm-6">
                    <div className="card mx-auto">
                        <div className="card-body">
                            <h5 className="card-title">Descontos especiais</h5>
                            <p className="card-text">Confira as ofertas de até 70% de desconto!</p>
                            <a href="#" className="btn btn-primary">Ver mais</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card mx-auto">
                        <div className="card-body">
                            <h5 className="card-title">Realize seu sonho</h5>
                            <p className="card-text">Financie a compra do seu veículo com a gente!</p>
                            <a href="#" className="btn btn-primary">Ver mais</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default ConfiraCards
