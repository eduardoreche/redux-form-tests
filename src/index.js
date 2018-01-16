import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Menu from './Menu';
import StockPage from './stock/StockPage';
import WithdrawPage from './stock/movements/WithdrawPage';
import reducers from './reducers';

const styles = {
  fontFamily: 'sans-serif'
};

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const App = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Menu />

        <Route exact path="/stock/withdraw" component={WithdrawPage} />
        <Route exact path="/" component={StockPage} />        
      </div>
    </Router>
  </Provider>
);

render(<App />, document.getElementById('root'));
