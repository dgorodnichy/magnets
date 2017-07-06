import React from 'react';
import configureStore from './store/configureStore.js'
import Products from './components/Products.jsx'
import App from './containers/App.js'
import { render } from 'react-dom';
import { Provider } from 'react-redux'
// import { hashHistory, Router, Route, Link, IndexRoute } from 'react-router';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const store = configureStore();


render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>, document.getElementById('app')
);
