import {
    GET_POKEMONS,
    LOAD_MORE
    // ADD_CONTACT,
    // GET_CONTACT,
    // UPDATE_CONTACT
} from "./types";
import axios from "axios";

export const getPokemons = () => async dispatch => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20`);
    console.log(res.data);
    dispatch({
        type: GET_POKEMONS,
        payload: res.data.results
    });
};

export const loadMore = offset => async dispatch => {
    const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`
    );
    console.log(res);
    dispatch({
        type: LOAD_MORE,
        payload: res.data.results
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
