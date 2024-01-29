import { useDispatch, useSelector } from "react-redux"
import { changePage, sliceMas, sliceMenos } from "../../redux/actions";

function Pagination() {
    const buscado = useSelector((state) => state.pokemonName);
    const paginado = useSelector((state) => state.paginado);
    const paginaActual = useSelector((state) => state.paginaActual);
    const dispatch = useDispatch()
      
    const atras = () =>{
        if (paginado === 0) {
            return null
        } else {
            dispatch(changePage(paginaActual, - 1))
            dispatch(sliceMenos(paginado))
        }
    }
    const siguiente = () =>{
        dispatch(changePage(paginaActual, 1))
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