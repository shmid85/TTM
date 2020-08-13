import {
    GET_ALL_ITEMS_SUCCESS
} from '../actions/action-types';

function items(state = [], action) {
    switch (action.type) {
        case GET_ALL_ITEMS_SUCCESS:
            return [...action.items];
        default:
            return state
    }
}

export default items;
