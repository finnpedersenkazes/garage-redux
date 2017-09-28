import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';
import { Link } from 'react-router-dom';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(values, () => {
      this.props.history.push('/');
    });
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Brand"
            name="brand"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Model"
            name="model"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Owner"
            name="owner"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Plate"
            name="plate"
            type="text"
            component={this.renderField}
          />
          <button className="btn btn-primary" type="submit" disabled={this.props.pristine || this.props.submitting}>
            Add Car
          </button>
        </form>
      </div>
    );
  }
}

          // <label htmlFor="content">Content</label>
          // <Field
          //   className="form-control"
          //   label="Content"
          //   name="content"
          //   component="textarea"
          //   rows="8"
          // />

export default reduxForm({
  form: 'newCarForm' // a unique identifier
})(
  connect(null, { createCar })(CarsNew)
);
