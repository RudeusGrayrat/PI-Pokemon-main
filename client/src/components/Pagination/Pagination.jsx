import { useDispatch, useSelector } from "react-redux"
import { changePage, sliceMas, sliceMenos } from "../../redux/actions";

function Pagination() {
    const buscado = useSelector((state) => state.pokemonName);
    const pagina = useSelector((state) => state.paginaActual);
    const paginado = useSelector((state) => state.paginado);
    const dispatch = useDispatch()
      
    const atras = () =>{
        if (paginado === 0) {
            return null
        } else {
            dispatch(sliceMenos(paginado))
        }
    }
    const siguiente = () =>{
        dispatch(sliceMas(paginado))
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