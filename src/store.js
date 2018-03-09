import {combineReducers, createStore} from "redux";
import subscribe from './reducers/subscribeReducer';


const store = createStore(
    combineReducers({
        subscribe
    })
);

export default store;