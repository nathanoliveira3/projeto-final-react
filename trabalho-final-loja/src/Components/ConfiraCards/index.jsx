import './estilos.css'

const ConfiraCards = () => {

    return (
        <div className="container mb-3">
            <div class="row">
                <div class="col-sm-6">
                    <div class="card mx-auto">
                        <div class="card-body">
                            <h5 class="card-title">Descontos especiais</h5>
                            <p class="card-text">Confira as ofertas de até 70% de desconto!</p>
                            <a href="#" class="btn btn-primary">Ver mais</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card mx-auto">
                        <div class="card-body">
                            <h5 class="card-title">Realize seu sonho</h5>
                            <p class="card-text">Financie a compra do seu veículo com a gente!</p>
                            <a href="#" class="btn btn-primary">Ver mais</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default ConfiraCards
