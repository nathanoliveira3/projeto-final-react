// import { useState, useEffect } from "react";

const Carrossel = () => {

    // const [imagens, setImagens] = useState([]);

    // useEffect(() => {

    //     const imgs = [
    //         {
    //             id: 1,
    //             src: "https://media.istockphoto.com/vectors/propaganda-word-concepts-banner-electioneering-presidential-vector-id1214905060",
    //             alt: ""
    //         },
    //         {
    //             id: 2,
    //             src: "https://media.istockphoto.com/vectors/propaganda-word-concepts-banner-electioneering-presidential-vector-id1214905060",
    //             alt: ""
    //         },
    //         {
    //             id: 3,
    //             src: "https://media.istockphoto.com/vectors/propaganda-word-concepts-banner-electioneering-presidential-vector-id1214905060",
    //             alt: ""
    //         }
    //     ]

    //     setImagens([...imagens, imgs]);
    // });

    return (
        <div id="carouselIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
                {/* {imagens.map((imagem, index) => {
                    return (
                        <div className="carousel-item active">
                            <img src={imagem.src} key={index} className="d-block w-100" alt={imagem.alt} />
                        </div>
                    );
                })} */}
                <div className="carousel-item active">
                    <img src="https://media.istockphoto.com/vectors/propaganda-word-concepts-banner-electioneering-presidential-vector-id1214905060" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://media.istockphoto.com/vectors/propaganda-word-concepts-banner-electioneering-presidential-vector-id1214905060" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://media.istockphoto.com/vectors/propaganda-word-concepts-banner-electioneering-presidential-vector-id1214905060" className="d-block w-100" alt="..." />
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