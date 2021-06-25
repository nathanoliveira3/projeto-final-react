import { useState } from 'react'
import './estilos.css'

const Card = (props) => {
  const [quantidade, setQuantidade] = useState(0)
 
  const salvar = () => {
    props.enviar(props.codigo, quantidade)
  }

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mt-5 mx-0">
      <div className="card mx-auto">
        <img src={props.imagem} className="card-img-top" alt="..." />
        <div className="card-body  d-flex flex-column">
          <h5 className="card-title text-center">{props.nome}</h5>
          <h5 className="card-title text-center">{props.preco}</h5> 
          <input type="number" min="1" max="5" placeholder="Quantidade" value={quantidade} onChange={evento => setQuantidade(evento.target.value)} />               
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