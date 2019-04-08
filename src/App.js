import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk'


import peramaxApp from './reducers'
import SignUp from './components/SignUp'
import NotFound from './components/NotFound'

const loggerMiddleware = createLogger();

const store = createStore(peramaxApp, applyMiddleware(thunk, loggerMiddleware))

class App extends Component {
    render() {
	return (
		<Provider store={store}>
		  <BrowserRouter>
		    <Switch>
		      <Route exact path='/' component={SignUp} />
		      <Route exact path='/success' component={NotFound} />  
		      <Route component={NotFound} />
		    </Switch>
		  </BrowserRouter>
		</Provider>
	)
    }
}

export default App
