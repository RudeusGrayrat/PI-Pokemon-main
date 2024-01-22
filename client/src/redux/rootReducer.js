//rootReducer.js
import { GET_ALL_POKEMONS, GET_DETAIL_POKEMON, SEARCH_POKEMON } from "./actions";
const initialState = {
  allPokemons: [],//Cards
  pokemonName: [],//Search
  pokemonDetails: {},//Detail
  //filtrar
  types: [],
  origen: [],
  //ordenar
  alfabetico: [],
  ataque: [],
  desendente: [],
  ascendente: [],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
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
    case 'GET_TYPES':
      return {
        ...state,
        types: action.payload,
        errors: {},
      };
    case 'CLEAN_DETAIL':
      return {
        ...state,
        pokemonDetails: '',
      };
    case 'FILTER_TYPES':
      // Implementa la lógica para FILTER_TYPES
      // ...
      return {
        ...state,
        pokemons: action.payload,
      };
    case 'FILTER_POKEMONS':
      // Implementa la lógica para FILTER_POKEMONS
      // ...
      return {
        ...state,
        pokemons: action.payload || action.payload,
        filterInfo: (action.payload === "AllPokemons") ? [] : [action.payload],
      };
    case 'ORDER_POKEMONS':
      // Implementa la lógica para ORDER_POKEMONS
      // ...
      return {
        ...state,
        pokemons: action.payload,
      };
    case 'ERROR':
      return {
        ...state,
        errors: action.payload,
      };
    case 'CLEAN_INFO_FILTERS':
      return {
        ...state,
        filterInfo: [],
      };
    default:
      return state;
  }
};

export default rootReducer;
