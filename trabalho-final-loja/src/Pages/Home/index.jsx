import Carrossel from "../../Components/Carrossel"
import CategoriasPopulares from "../../Components/CategoriasPopulares"
import SubTitulo from "../../Components/SubTitulo"

const Home = () => {

    return (
        <>
            <section>
                <Carrossel />
            </section>

            <div className="categorias-populares">

                <SubTitulo>
                    Categorias Populares
                </SubTitulo>
                <CategoriasPopulares />

            </div>
        </>

    )
}

export default Home