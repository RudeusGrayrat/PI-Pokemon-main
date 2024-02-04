import { GET_ALL_POKEMONS, GET_DETAIL_POKEMON, SEARCH_POKEMON, CLEAN_POKEMON, CHANGE_PAGE, SLICE_CHANGE, NUMBER, GET_ALL_TYPES } from "./actions";

const initialState = {
  allPokemons: [],
  pokemonName: [],
  pokemonDetails: {},
  tipos:[],
  paginaActual: 1,
  paginado: 0,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
      };
    case GET_DETAIL_POKEMON:
      return {
        ...state,
        pokemonDetails: action.payload,
        errors: {},
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        pokemonName: action.payload,
        errors: {},
      };
    case CLEAN_POKEMON:
      return {
        ...state,
        pokemonName: action.payload,
        errors: {},
      };
    case CHANGE_PAGE:
      return {
        ...state,
        paginaActual: action.payload,
      };
    case SLICE_CHANGE:
      return {
        ...state,
        paginado: action.payload,
      };
    case NUMBER:
      return {
        ...state,
        paginado: action.payload,
      };
    case GET_ALL_TYPES:
      return {
        ...state,
        tipos: action.payload
      }
    default:
      return state;
  }
};

export default rootReducer;
