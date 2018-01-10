import _ from 'lodash';
import React from 'react';
import ReactTable from 'react-table';

import "react-table/react-table.css";

export default function showResults(items, productList, warehouseList) {
  return(
    <div>
      <ReactTable
        data={items}
        columns={[
          {
            Header: 'SKU',
            accessor: 'sku'
          },
          {
            Header: 'Warehouse',
            accessor: 'warehouse',
            Cell: row => (
              <span>
                {findInArray(row.value, warehouseList).name}
              </span>
            )
          },
          {
            Header: 'Product',
            accessor: 'product',
            Cell: row => (
              <span>
                {findInArray(row.value, productList).name}
              </span>
            )
          },
          {
            Header: 'Condition',
            accessor: 'condition',
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