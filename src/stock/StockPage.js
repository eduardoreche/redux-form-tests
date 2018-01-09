import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

import * as actions from '../actions';
import StockItemForm from './StockItemForm';

class StockPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchWarehouses();
    this.props.fetchProducts();
  }

  handleSubmit(values) {
    console.log(values);
    this.props.addItem(values);
    setTimeout(this.props.fetchItems(), 1000);
  }

  render() {
    const { products, warehouses, items } = this.props;
    return (
      <div>
        <h1>Stock</h1>

        <StockItemForm
          onSubmit={this.handleSubmit.bind(this)}
          products={products}
          warehouses={warehouses}
        />

        <ul>
          {items && _.map(items, item => <li key={item.sku}>{item.sku}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ product, warehouse, item }) => {
  return {
    warehouses: warehouse.list,
    products: product.list,
    items: item
  };
};

export default connect(mapStateToProps, actions)(StockPage);