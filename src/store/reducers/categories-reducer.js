import {
    GET_ALL_CATEGORIES_SUCCESS,
} from '../actions/action-types';

function categories(state = [], action) {
    switch (action.type) {
        case GET_ALL_CATEGORIES_SUCCESS:
            return [...action.categories];
        default:
            return state
    }
}

export default categories;
