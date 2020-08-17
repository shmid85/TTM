import {createStore, applyMiddleware, compose} from 'redux' ;
import rootReducer from "./reducers/root-reducer";
import thunk from 'redux-thunk';
import {LOG_USER_ACTION} from "./actions/action-types";
import {saveUserActionToStore} from "./actions/user-actions";

const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware =
    ext && process.env.NODE_ENV === 'development' ? ext() : f => f;

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, createLogger()),
        devtoolMiddleware,
    )
);

export default store;

function createLogger() {
    return store => next => action => {
        if (action.type === LOG_USER_ACTION) {
            if (action.event.target.id === 'category') {
                const index = action.event.target.selectedIndex;
                const optionElement = action.event.target.childNodes[index];
                const dataFlags = optionElement.getAttribute('data-flags');

                if (dataFlags) {
                    return next(action);
                }
            }

            store.dispatch(saveUserActionToStore({
                    id: Math.ceil(action.event.timeStamp),
                    eventName: action.event.type,
                    eventValue: action.event.target.value,
                })
            );
        }

        return next(action);
    }
}
