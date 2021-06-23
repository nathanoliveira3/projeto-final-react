import { useState, useEffect } from "react";

const Carrossel = () => {

    const [imagens, setImagens] = useState([]);

    useEffect(() => {

        imgs = [
            {
                src: "",
                alt: ""
            },
            {
                src: "",
                alt: ""
            },
            {
                src: "",
                alt: ""
            }
        ]

        setImagens(imgs);
    });

    return (
        <div id="carouselIndicators" className="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
                {imagens.map((imagem) => {
                    return <div class="carousel-item">
                        <img src={imagem.src} className="d-block w-100" alt={imagem.alt} />
                    </div>
                })}
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