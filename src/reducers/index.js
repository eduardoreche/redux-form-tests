import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import productsReducer from './productsReducer';
import warehousesReducer from './warehousesReducer';
import itemsReducer from './itemsReducer';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  product: productsReducer,
  warehouse: warehousesReducer,
  item: itemsReducer

});

export default rootReducer;