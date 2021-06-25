import Capim from '../../Imagens/Capim.gif'
import Capim_canela_store from '../../Imagens/Capim_canela_store.png'
import Aproveite from '../../Imagens/Aproveite.png'

const Carrossel = () => {

    

    return (
        <div id="carouselIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Capim} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={Capim_canela_store} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={Aproveite} className="d-block w-100" alt="..." />
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carrossel;