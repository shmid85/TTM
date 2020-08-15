import {
    LOG_USER_ACTION,
    SAVE_USER_ACTION_TO_STORE
} from "./action-types";

export function  logUserAction(event) {
    return {
        type: LOG_USER_ACTION,
        event: event.nativeEvent,
    }
}

export function saveUserActionToStore(event) {
    return {
        type: SAVE_USER_ACTION_TO_STORE,
        event,
    }
}
