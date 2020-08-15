import {combineReducers} from 'redux';
import categories from './categories-reducer';
import items from './items-reducer';
import userActions from "./user-actions-reducer";

const rootReducer = combineReducers({
    categories,
    items,
    userActions
});

export default rootReducer;
