import './estilos.css'
const Card = (props) => {

  return (
    <div className="card">
      <img src="..." className="card-img-top" />
      <div className="card-body  d-flex flex-column">
        <h5 className="card-title text-center">{props.nome}</h5>        
        <h5 className="card-title text-center">R${props.preco}</h5>
        <a href="#" className="btn btn-primary">Comprar</a>
      </div>
    </div>
  )

}

export default Card