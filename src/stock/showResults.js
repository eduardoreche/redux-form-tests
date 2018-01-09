import _ from 'lodash';
import React from 'react';
import ReactTable from 'react-table';

import "react-table/react-table.css";

export default function showResults(items) {
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
            accessor: 'warehouse'
          },
          {
            Header: 'Product',
            accessor: 'product'
          },
          {
            Header: 'Condition',
            accessor: 'condition'
          },

        ]}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    </div>
  )
}