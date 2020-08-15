import {
    GET_ALL_ITEMS_SUCCESS,
    GET_ITEMS_BY_PARENTID_SUCCESS,
} from '../actions/action-types';

function items(state = [], action) {
    switch (action.type) {
        case GET_ALL_ITEMS_SUCCESS:
        case GET_ITEMS_BY_PARENTID_SUCCESS:
            return [...action.items];
        default:
            return state
    }
}

export default items;
