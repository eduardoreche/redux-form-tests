import { FETCH_WAREHOUSES } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_WAREHOUSES:
      return { list: action.payload }
    default:
      return state;
  }
}