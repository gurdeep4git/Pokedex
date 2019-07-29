import { GET_POKEMONS, LOAD_MORE, GET_POKEMONS_SUCCESS, GET_POKEMONS_FAIL } from "../actions/types";

const initialState = {
    pokemons: [],
    isFetching:false,
    error:null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS: {
            return {
                ...state,
                isFetching:true
            };
        }

        case  GET_POKEMONS_SUCCESS:{
            return {
                ...state,
                pokemons: [...state.pokemons, ...action.payload],
                isFetching:false,
                error:null
            };
        }

        case  GET_POKEMONS_FAIL:{
            return {
                ...state,
                isFetching:false,
                error: action.payload
            };
        }

        case LOAD_MORE: {
            return {
                ...state,
                pokemons: [...state.pokemons, ...action.payload],
                isFetching:false,
                error: null
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
