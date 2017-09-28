import _ from 'lodash';
import { FETCH_CARS, FETCH_CAR } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CARS:
      return _.mapKeys(action.payload, 'id');
    case FETCH_CAR:
      return [action.payload];
    default:
      return state;
  }
}
