import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchCars } from '../actions';

import CarsNew from './cars_new';

class CarsIndex extends Component {

  componentDidMount() {
    this.props.fetchCars();
  }

  renderCars() {
    return _.map(this.props.cars, (car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <div className="post-item">
            <h3>{car.brand}</h3>
            <p>{car.model}</p>
          </div>
       </Link>
      );
    });
  }

  render() {
    return (
      <div className="app">
        <div>
          <Link to="home">Home</Link> | <Link to="about">About</Link> | <strong>Cars</strong>
        </div>
        <div>
          <Link to="cars/new">Add new car</Link>
        </div>
        <div>
          {this.renderCars()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (CarsIndex);
