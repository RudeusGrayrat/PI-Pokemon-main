// actions.js
import axios from 'axios';
export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_DETAIL_POKEMON = 'GET_DETAIL_POKEMON'

export const fetchPokemons = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3001/pokemons');
    const pokemons = response.data;
    dispatch({
      type: GET_ALL_POKEMONS,
      payload: pokemons,
    });
  } catch (error) {
    console.error('Error fetching pokemons:', error);
  }
};

export const fetchCharacter = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
    const character = response.data;
    // Dispatch para actualizar el estado con el personaje específico
    dispatch({
      type: GET_DETAIL_POKEMON,
      payload: character,
    });
  } catch (error) {
    console.error('Error fetching character:', error);
  }
};
