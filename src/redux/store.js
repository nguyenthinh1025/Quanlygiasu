import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { CourceReducer } from "./reducer/CourceReducer";
import { CategoryReducer } from "./reducer/CategoryReducer";
import { TutorReducer } from "./reducer/TutorReducer";
import { SchoolReducer } from "./reducer/SchoolReducer";


const rootReducer = combineReducers({
    CourceReducer,
    CategoryReducer,
    TutorReducer,
    SchoolReducer,
});

let middleWare = applyMiddleware(reduxThunk);
let composeCustom = compose(middleWare);

export const store = createStore(rootReducer, composeCustom);
