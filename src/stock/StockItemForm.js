import _ from 'lodash';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const StockItemForm = props => {

  const { handleSubmit, resetForm, pristine, reset, submitting, products, warehouses } = props;

  const renderSelectField = (name, values) => {
    return (
      <Field
        name={name}
        component="select"
        className="form-control"
      >
        <option />
        {values && _.map(values, item => {
          return <option key={item.id} value={item.id}>{item.name}</option>
        })}
      </Field>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      
      <div className="form-group">
        <label>Product</label>
        {renderSelectField('product', products)}
      </div> 

      <div className="form-group">
        <label>Warehouse</label>
        {renderSelectField('warehouse', warehouses)}
      </div>

      <div className="form-group">
        <label>SKU</label>
          <Field 
            name="sku"
            component="input"
            type="text"
            className="form-control"
            placeholder="SKU"
          />
      </div>

      <div className="form-group">
        <label>Condition</label>
          <Field
            name="condition"
            component="select"
            className="form-control"
          >
            <option />
            <option value="N">New</option>
            <option value="U">Used</option>
          </Field>
      </div>      


      <div className="form-group">
        <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>
          Submit
        </button>
        {' '}
        <button type="button" className="btn btn-secondary" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'stockItemForm'
})(StockItemForm);