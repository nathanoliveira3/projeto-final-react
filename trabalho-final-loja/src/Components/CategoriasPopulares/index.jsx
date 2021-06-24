import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faCar, faFutbol, faGamepad, faTshirt, faMobileAlt, faMicrophone, faHammer, faTv, faCouch } from "@fortawesome/free-solid-svg-icons";
import './estilos.css'

const CategoriasPopulares = () => {

    return (
        <div className="container mt-3">
            <div className="row rol-cols-5 text-center">
                <div className="col">
                    <FontAwesomeIcon icon={faCar} className="fa-2x" /> <p className="">Carros, Motos e Outros</p>
                </div>
                <div className="col">
                    <FontAwesomeIcon icon={faTshirt} className="fa-2x" /><p>Calçados, Roupas e Bolsas</p>
                </div>
                <div className="col">
                    <FontAwesomeIcon icon={faMobileAlt} className="fa-2x" /><p>Celulares e Telefones</p>
                </div>
                <div className="col">
                    <FontAwesomeIcon icon={faMicrophone} className="fa-2x" /><p>Eletrônicos, Áudio e Vídeo</p>
                </div>
                <div className="col">
                    <FontAwesomeIcon icon={faHammer} className="fa-2x" /><p>Ferramentas</p>
                </div>

            </div>
            <div className="row rol-cols-5 text-center">
                <div className="col">
                    <FontAwesomeIcon icon={faCouch} className="fa-2x" /><p>Casa, Móveis e Decoração</p>
                </div>
                <div className="col">
                    <FontAwesomeIcon icon={faTv} className="fa-2x" /><p>Informática</p>
                </div>
                <div className="col">
                    <FontAwesomeIcon icon={faFutbol} className="fa-2x" /><p>Esportes e Fitness</p>
                </div>
                <div className="col">
                    <FontAwesomeIcon icon={faGamepad} className="fa-2x" /><p>Games</p>
                </div>
                <div className="col">
                    <FontAwesomeIcon icon={faBuilding} className="fa-2x" /><p>Imóveis</p>
                </div>
            </div>
        </div>
    )

}

export default CategoriasPopulares
