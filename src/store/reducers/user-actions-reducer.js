import {SAVE_USER_ACTION_TO_STORE} from "../actions/action-types";

function userActions(state = [], action) {
    switch (action.type) {
        case SAVE_USER_ACTION_TO_STORE:
            return [
                ...state,
                action.event,
            ];
        default:
            return state
    }
}

export default userActions;
