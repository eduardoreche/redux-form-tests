import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

import * as actions from '../actions';
import StockItemForm from './StockItemForm';
import showResults from './showResults';

class StockPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'list'
    };
  }

  componentWillMount() {
    this.props.fetchWarehouses();
    this.props.fetchProducts();
  }

  handleSubmit(values) {
    console.log(values);
    this.props.addItem(values);
    setTimeout(this.props.fetchItems(), 1000);
    this.show('list');
  }

  renderList() {
    const { products, warehouses, items } = this.props;
    return <div>{showResults(items, products, warehouses)}</div>;
  }

  renderNavigationButtons(title, page) {
    return (
      <div className="text-right" style={{ 'margin-bottom': '4px' }}>
        {this.state.page === 'form' && (
          <button
            className="btn btn-primary btn-sm"
            type="button"
            onClick={() => this.show('list')}>
            &#8656; Back
          </button>
        )}

        {this.state.page === 'list' && (
          <button
            className="btn btn-primary btn-sm"
            type="button"
            onClick={() => this.show('form')}>
            Add Item
          </button>
        )}
      </div>
    );
  }

  show(page) {
    this.setState({ page });
  }

  render() {
    const { products, warehouses, items } = this.props;
    return (
      <div>
        <h1>Stock</h1>
        {this.renderNavigationButtons()}

        {this.state.page === 'form' && (
          <div>
            <StockItemForm
              onSubmit={this.handleSubmit.bind(this)}
              products={products}
              warehouses={warehouses}
            />
          </div>
        )}

        {this.state.page === 'list' && this.renderList()}
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
