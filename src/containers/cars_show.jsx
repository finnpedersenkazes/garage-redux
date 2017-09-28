import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchCar } from '../actions/index';

class CarsShow extends Component {
  componentDidMount() {
    this.props.fetchCar(this.props.match.params.id);
  }

  render() {
    const { car } = this.props;
    console.log('car: ' + car);
    if (!car) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <div className="post-item">
          <h3>{car.brand}</h3>
          <p>{car.model}</p>
          <p>{car.owner}</p>
          <p>{car.plate}</p>
        </div>
        <Link to="/">
          Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10);
  console.log('car id: ' + id);
  console.log('state: ' + state.cars);
  return { car: state.cars[0] };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
