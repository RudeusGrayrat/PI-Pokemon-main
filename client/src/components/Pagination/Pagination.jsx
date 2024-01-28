import { useDispatch, useSelector } from "react-redux"
import { changePage, sliceMas, sliceMenos } from "../../redux/actions";

function Pagination() {
    const buscado = useSelector((state) => state.pokemonName);
    const unadeejemplo = useSelector((state) => state.unadeejemplo);

    const dispatch = useDispatch()

    const siguiente = () => {
        dispatch(sliceMas(unadeejemplo))
    }
    const atras = () => {
        dispatch(sliceMenos(unadeejemplo))
    }
    if (buscado.length > 0) {
        return null
    } else {
        return (
            <div>
                <button onClick={atras}>
                    Atras
                </button>
                <button onClick={siguiente}>
                    Siguiente
                </button>
            </div>
        )
    }

}

export default Pagination