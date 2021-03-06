import {
    GET_POKEMONS,
    GET_POKEMONS_FAIL,
    GET_POKEMONS_SUCCESS,
    LOAD_MORE,
    GET_POKEMON_BY_NAME
    // ADD_CONTACT,
    // GET_CONTACT,
    // UPDATE_CONTACT
} from "./types";
import axios from "axios";

export const getPokemons = () => async dispatch => {
    dispatch({ type: GET_POKEMONS });
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20`);

    if (res) {
        dispatch(getPokemonsSuccess(res.data.results));
    } else {
        dispatch(getPokemonsFail());
    }
};

export const getPokemonsSuccess = pokemons => dispatch => {
    dispatch({
        type: GET_POKEMONS_SUCCESS,
        payload: pokemons
    });
};

export const getPokemonsFail = () => dispatch => {
    dispatch({
        type: GET_POKEMONS_FAIL,
        payload: "Something went wrong"
    });
};

export const loadMore = offset => async dispatch => {
    const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`
    );
    dispatch({
        type: LOAD_MORE,
        payload: res.data.results
    });
};

export const getPokemonByName = name => async dispatch => {
    const pokemon = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    debugger;
    console.log(pokemon.data);
    dispatch({
        type: GET_POKEMON_BY_NAME,
        payload: pokemon.data
    });
};

// export const deleteContact = id => async dispatch => {
//     await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
//     dispatch({
//         type: DELETE_CONTACT,
//         payload: id
//     });
// };

// export const addContact = contact => async dispatch => {
//     const res = await axios.post(
//         `https://jsonplaceholder.typicode.com/users`,
//         contact
//     );
//     dispatch({
//         type: ADD_CONTACT,
//         payload: res.data
//     });
// };

// export const getContactById = id => async dispatch => {
//     const res = await axios.get(
//         `https://jsonplaceholder.typicode.com/users/${id}`
//     );
//     dispatch({
//         type: GET_CONTACT,
//         payload: res.data
//     });
// };

// export const updateContact = contact => async dispatch => {
//     const res = await axios.put(
//         `https://jsonplaceholder.typicode.com/users/${contact.id}`,
//         contact
//     );
//     dispatch({
//         type: UPDATE_CONTACT,
//         payload: res.data
//     });
// };
