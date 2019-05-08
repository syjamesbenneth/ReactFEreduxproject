import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const loggerMiddleware = createLogger();

export const history = createBrowserHistory();

export const store = configureStore();

function configureStore(state={}){
    return createStore(
	rootReducer(history),
	state,
	applyMiddleware(thunk, loggerMiddleware)
    );
}
