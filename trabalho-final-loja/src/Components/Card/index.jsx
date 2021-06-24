import './estilos.css'
const Card = (props) => {

  const salvar = () => {
    props.enviar(props.codigo)
  }

  return (
    <div className="card">
      <img src="..." className="card-img-top" />
      <div className="card-body  d-flex flex-column">
        <h5 className="card-title text-center">{props.nome}</h5>        
        <h5 className="card-title text-center">{props.preco}</h5>
        <a href="#" className="btn btn-primary" onClick={salvar}>Comprar</a>
        <a href={`/produtos/${props.id}`} className="btn mt-2 btn-primary">Info</a>
      </div>
    </div>
  )

}

export default Card