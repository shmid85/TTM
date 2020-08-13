import {
    GET_ALL_ITEMS_STARTED,
    GET_ALL_ITEMS_SUCCESS,
    DELETE_ITEM_STARTED,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEMS_BY_PARENT_ID_STARTED,
    DELETE_ITEMS_BY_PARENT_ID_SUCCESS, ADD_ITEM_STARTED, ADD_ITEM_SUCCESS,
} from './action-types';

import {itemsService} from "../../services/items-service";
import {getAllCategories} from "./categories-actions";

export function getAllItems() {
    return dispatch => {
        dispatch(getAllItemsStarted());

        itemsService.getAllItems().then(
            result => dispatch(getAllItemsSuccess(result))
        );
    }
}

export function getAllItemsStarted() {
    return {
        type: GET_ALL_ITEMS_STARTED
    }
}

export function getAllItemsSuccess(items) {
    return {
        type: GET_ALL_ITEMS_SUCCESS,
        items
    }
}

export function deleteItem(id) {
    return dispatch => {
        dispatch(deleteItemStarted());

        itemsService.deleteItem(id).then(
            () => {
                dispatch(deleteItemSuccess());
                dispatch(getAllItems());
            }
        );
    }
}

export function deleteItemStarted() {
    return {
        type: DELETE_ITEM_STARTED,
    }
}

export function deleteItemSuccess() {
    return {
        type: DELETE_ITEM_SUCCESS,
    }
}

export function deleteItemsByParentId(parentId) {
    return (dispatch, getState) => {
        const {items} = getState();
        const promises = [];

        if(items && items.length) {

            items.forEach(item => {
                if(item.parentId === parentId) {
                    promises.push(dispatch(deleteItem(item.id)));
                }
            });

            Promise.all(promises).then(() => {
                dispatch(getAllCategories());
            })
        }
    }
}

export function deleteItemsByParentIdStarted() {
    return {
        type: DELETE_ITEMS_BY_PARENT_ID_STARTED,
    }
}

export function deleteItemsByParentIdSuccess() {
    return {
        type: DELETE_ITEMS_BY_PARENT_ID_SUCCESS,
    }
}

export function addItem(name, parentId, flags) {
    return dispatch => {
        dispatch(addItemStarted());

        itemsService.addItem(name, parentId, flags).then(
            () => {
                dispatch(addItemSuccess());
                dispatch(getAllItems());
            }
        );
    }
}

export function addItemStarted() {
    return {
        type: ADD_ITEM_STARTED,
    }
}

export function addItemSuccess() {
    return {
        type: ADD_ITEM_SUCCESS,
    }
}
