import {combineReducers} from "redux";
import partyReducer from "src/store/reducer/partyReducer";

const rootReducer = combineReducers({
    partyReducer: partyReducer
});

export default rootReducer;