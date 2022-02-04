import {combineReducers, createStore} from "redux";
import caseReducer from "./case-reducer";

let reducers = combineReducers({
    caseChange: caseReducer
});

const store = createStore(reducers);

export default store;
