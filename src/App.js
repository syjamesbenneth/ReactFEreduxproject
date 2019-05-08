import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Provider } from 'react-redux';

import { store } from './store';

import SignUp from './components/SignUp'
import NotFound from './components/NotFound'

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
