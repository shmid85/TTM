import {
    ADD_CATEGORY_STARTED,
    ADD_CATEGORY_SUCCESS,
    DELETE_CATEGORY_STARTED,
    DELETE_CATEGORY_SUCCESS,
    GET_ALL_CATEGORIES_STARTED,
    GET_ALL_CATEGORIES_SUCCESS,
    UPDATE_CATEGORY_STARTED,
    UPDATE_CATEGORY_SUCCESS,
} from './action-types';
import {categoriesService} from "../../services/categories-service";
import {deleteItemsByParentId} from "./items-actions";

export function getAllCategories() {
    return dispatch => {
        dispatch(getAllCategoriesStarted());

        categoriesService.getAllCategories().then(
            result => dispatch(getAllCategoriesSuccess(result))
        );
    }
}

export function getAllCategoriesStarted() {
    return {
        type: GET_ALL_CATEGORIES_STARTED
    }
}

export function getAllCategoriesSuccess(categories) {
    return {
        type: GET_ALL_CATEGORIES_SUCCESS,
        categories
    }
}

export function deleteCategory(id) {
    return dispatch => {
        dispatch(deleteCategoryStarted());

        categoriesService.deleteCategory(id).then(
            () => {
                dispatch(deleteCategorySuccess());
                dispatch(deleteItemsByParentId(id));
            }
        );
    }
}

export function deleteCategoryStarted() {
    return {
        type: DELETE_CATEGORY_STARTED,
    }
}

export function deleteCategorySuccess() {
    return {
        type: DELETE_CATEGORY_SUCCESS,
    }
}

export function addCategory(name, flags = '') {
    return dispatch => {
        dispatch(addCategoryStarted());

        categoriesService.addCategory(name, flags).then(
            () => {
                dispatch(addCategorySuccess());
                dispatch(getAllCategories());
            }
        );
    }
}

export function addCategoryStarted() {
    return {
        type: ADD_CATEGORY_STARTED,
    }
}

export function addCategorySuccess() {
    return {
        type: ADD_CATEGORY_SUCCESS,
    }
}

export function updateCategory(id, name, flags = '') {
    return dispatch => {
        dispatch(updateCategoryStarted());

        categoriesService.updateCategory(id, name, flags).then(
            () => {
                dispatch(updateCategorySuccess());
                dispatch(getAllCategories());
            }
        );
    }
}

export function updateCategoryStarted() {
    return {
        type: UPDATE_CATEGORY_STARTED,
    }
}

export function updateCategorySuccess() {
    return {
        type: UPDATE_CATEGORY_SUCCESS,
    }
}
