import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import listReducer from "../containers/ListContainer/reducer";
import searchReposReducer from '../containers/SearchReposContainer/reducer';
import authReducer from '../containers/LoginContainer/reducer';

export default combineReducers({
	listReducer,
	searchReposReducer,
    authReducer,
});
