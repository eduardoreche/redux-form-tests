import { 
  FETCH_PRODUCTS, 
  FETCH_WAREHOUSES,
  FETCH_ITEMS,
  ADD_ITEM, 
} from './types';

export const addItem = (item) => dispatch => {
  dispatch({
    type: ADD_ITEM,
    payload: item
  });
}

export const fetchItems = () => dispatch => {
  dispatch({
    type: FETCH_ITEMS
  });
}

export const fetchProducts = () => dispatch => {
  const products = [
    {id: '123', name: 'Product 1'},
    { id: '1234', name: 'Product 2' },
    { id: '454', name: 'Product 3' },
    { id: '9384', name: 'Product 4' },
    { id: '2938', name: 'Product 5' },
  ];

  dispatch({
    type: FETCH_PRODUCTS,
    payload: products,    
  })
}

export const fetchWarehouses = () => dispatch => {
  const warehouses = [
    { id: '1', name: 'Warehouse 1'},
    { id: '2', name: 'Warehouse 2' },
    { id: '3', name: 'Warehouse 3' },
    { id: '4', name: 'Warehouse 4' },
  ];

  dispatch({
    type: FETCH_WAREHOUSES,
    payload: warehouses
  })
}