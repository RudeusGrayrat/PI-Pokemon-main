import { GET_ALL_POKEMONS, GET_DETAIL_POKEMON, SEARCH_POKEMON, CLEAN_POKEMON } from "./actions";

const initialState = {
  allPokemons: [],
  pokemonName: [],
  pokemonDetails: {},

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

    default:
      return state;
  }
};

export default rootReducer;
