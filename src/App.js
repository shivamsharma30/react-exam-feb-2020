import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import  Header  from './components/Header';
import ProductDetailsPage from './containers/ProductDetailsPage';
import SearchPage from './containers/SearchPage';
import LogInPage from './containers/LogInPage';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router >
        <Header />
        <Route exact path="/logInPage" component={LogInPage} />
        <Route path="/productDetailsPage" component={ProductDetailsPage} />
        <Route path="/searchPage" component={SearchPage} />
      </Router>
    </Provider>
  );
}

export default App;
