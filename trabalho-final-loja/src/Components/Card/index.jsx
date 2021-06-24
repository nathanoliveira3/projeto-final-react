import './estilos.css'
const Card = (props) => {

  const salvar = () => {
    props.enviar(props.codigo)
  }

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mt-5 mx-0">
      <div className="card mx-auto">
        <img src="..." className="card-img-top" />
        <div className="card-body  d-flex flex-column">
          <h5 className="card-title text-center">{props.nome}</h5>
          <h5 className="card-title text-center">R${props.preco}</h5>
          <div className="row mt-4">
            <a href="#" className="btn btn-dark col-5 mx-3 " onClick={salvar}>Comprar</a>
            <a href={`/produtos/${props.id}`} className="btn btn-dark col-5">Info</a>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Card