import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import todosReducer from "./sevices/reducer/reducer";

const store=createStore(todosReducer,applyMiddleware(thunk))


export default store;