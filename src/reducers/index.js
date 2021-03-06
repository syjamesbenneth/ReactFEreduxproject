import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

import common from "./common";
import signup from "./signup";

export default history => {
    return combineReducers({
	signup,
	common,
	form: formReducer,
	router: connectRouter(history)
    });
};


