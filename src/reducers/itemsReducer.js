import { FETCH_ITEMS, ADD_ITEM } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return state;
    case ADD_ITEM: {
      return [action.payload, ...state]
    }
    default:
      return state;
  }
}
