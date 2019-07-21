import { GET_POKEMONS, LOAD_MORE } from "../actions/types";

const initialState = {
    pokemons: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS: {
            return {
                ...state,
                pokemons: action.payload
            };
        }
        case LOAD_MORE: {
            return {
                ...state,
                pokemons: [action.payload, ...state.pokemons]
            };
        }
        // case GET_CONTACT: {
        //     return {
        //         ...state,
        //         contact: action.payload
        //     };
        // }
        // case DELETE_CONTACT: {
        //     return {
        //         ...state,
        //         contacts: state.contacts.filter(
        //             contact => contact.id !== action.payload
        //         )
        //     };
        // }
        // case ADD_CONTACT: {
        //     return {
        //         ...state,
        //         contacts: [action.payload, ...state.contacts]
        //     };
        // }
        // case UPDATE_CONTACT: {
        //     return {
        //         ...state,
        //         contacts: state.contacts.map(contact =>
        //             contact.id === action.payload.id
        //                 ? (contact = action.payload)
        //                 : contact
        //         )
        //     };
        // }
        default:
            return state;
    }
}
