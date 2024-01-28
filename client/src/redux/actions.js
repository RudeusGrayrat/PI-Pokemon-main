import axios from 'axios';
export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_DETAIL_POKEMON = 'GET_DETAIL_POKEMON'
export const SEARCH_POKEMON = 'SEARCH_POKEMON'
export const CLEAN_POKEMON = 'CLEAN_POKEMON'
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const SLICE_CHANGE = 'SLICE_CHANGE';

export const fetchPokemons = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3001/pokemons');
    const pokemons = response.data;
    dispatch({
      type: GET_ALL_POKEMONS,
      payload: pokemons,
    });
  } catch (error) {
    alert('Error fetching pokemons:', error);
  }
};

export const fetchCharacter = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
    const character = response.data;
    dispatch({
      type: GET_DETAIL_POKEMON,
      payload: character,
    });
  } catch (error) {
    console.error('Error fetching character:', error);
  }
};

export const searchPokemon = (name) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
    const pokemon = response.data;
    dispatch({
      type: SEARCH_POKEMON,
      payload: pokemon,
    });
  } catch (error) {
    console.error('Error fetching character:', error);
  }
};

export const cleanSearch = () => (dispatch) => {
  const vacio = []
  dispatch({
    type: CLEAN_POKEMON,
    payload: vacio,
  });
}
export const changePage = (pagina) => (dispatch) => {
  dispatch({
    type: CHANGE_PAGE,
    payload: pagina + 1
  })
}
export const sliceMas = (ejemplo) => (dispatch) => {
  dispatch({
    type: SLICE_CHANGE,
    payload: ejemplo + 12
  })
}

export const sliceMenos = (ejemplo) => (dispatch) => {
  dispatch({
    type: SLICE_CHANGE,
    payload: ejemplo - 12
  })
}