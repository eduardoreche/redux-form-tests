import _ from 'lodash';
import React from 'react';
import ReactTable from 'react-table';

import "react-table/react-table.css";

export default function showResults(items, productList, warehouseList) {
  return(
    <div>
      <ReactTable
        data={items}
        filterable
        columns={[
          {
            Header: 'SKU',
            accessor: 'sku',
            minWidth: 50,
          }, 
          {
            Header: 'Warehouse',
            accessor: 'warehouse',
            minWidth: 200,
            Filter: ({filter, onChange}) =>
              <select 
                onChange={event => onChange(event.target.value)}
                style={{width: '100%'}}
                value={filter ? filter.value : ''}
              >
                <option value=''></option>
                {warehouseList && _.map(warehouseList, item => 
                  (<option value={item.id}>{item.name}</option>)
                )}
              </select>
            ,
            Cell: row => (
              <span>
                {findInArray(row.value, warehouseList).name}
              </span>
            )
          },
          {
            Header: 'Product',
            accessor: 'product',
            minWidth: 200,
            Filter: ({ filter, onChange }) =>
              <select
                onChange={event => onChange(event.target.value)}
                style={{ width: '100%' }}
                value={filter ? filter.value : ''}
              >
                <option value=''></option>
                {productList && _.map(productList, item =>
                  (<option value={item.id}>{item.name}</option>)
                )}
              </select>
            ,
            Cell: row => (
              <span>
                {findInArray(row.value, productList).name}
              </span>
            )
          },
          {
            Header: 'Condition',
            accessor: 'condition',
            width: 100,
            Filter: ({ filter, onChange }) =>
              <select
                onChange={event => onChange(event.target.value)}
                style={{ width: '100%' }}
                value={filter ? filter.value : ''}
              >
                <option value=''></option>
                <option value='N'>New</option>
                <option value='U'>Used</option>
              </select>
            ,
            Cell: row => (
              <span>{ row.value === 'N' ? 'New' : 'Used' }</span>
            )
          },

        ]}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    </div>
  )
}

function findInArray(id, list) {
  const a = _.find(list, item => item.id === id);
  return a;
}