import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import Home from './components/home';
import About from './components/about';
import '../assets/stylesheets/application.scss';

import carsReducer from './reducers/cars_reducer';
import CarsIndex from './containers/cars_index';
import CarsNew from './containers/cars_new';
import CarsShow from './containers/cars_show';

import { reducer as formReducer } from 'redux-form';

// State and reducers
const initialState = {
  garage: "FastAndFuriousGarage",
  cars: []
  // cars: [
  //   { id: 1, brand: 'Peugeot', model: '106', owner: 'John', plate: 'WOB-ED-42' },
  //   { id: 2, brand: 'Renault', model: 'Scenic', owner: 'Paul', plate: 'AAA-12-BC' },
  //   { id: 3, brand: 'Aston Martin', model: 'DB Mark III', owner: 'James', plate: '418-ED-94' },
  //   { id: 4, brand: 'VW', model: 'Beetle', owner: 'George', plate: '1234-XD-75' },
  //   { id: 5, brand: 'BMW', model: '850i', owner: 'Finn', plate: '2-FAST-4-YOU' }
  // ]
};

const reducers = combineReducers({
  garage: (state = null, action) => state,
  cars: carsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={CarsIndex} />
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/cars" exact component={CarsIndex} />
        <Route path="/cars/new" exact component={CarsNew} />
        <Route path="/cars/:id" exact component={CarsShow} />
      </Switch>
    </Router>
  </Provider>,
  document.querySelector('.container')
);
