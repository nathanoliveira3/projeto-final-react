import Carrossel from "../../Components/Carrossel"
import CategoriasPopulares from "../../Components/CategoriasPopulares"
import Confira from "../../Components/Confira"
import SubTitulo from "../../Components/SubTitulo"

const Home = () => {

    return (
        <>
            <section>
                <Carrossel />
            </section>

            <div className="mt-3">

                <SubTitulo>
                    Confira
                </SubTitulo>

                <Confira/>

                <SubTitulo>
                    Categorias Populares
                </SubTitulo>
                <CategoriasPopulares />

            </div>
        </>

    )
}

export default Home