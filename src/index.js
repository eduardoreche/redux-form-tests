import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import Hello from './Hello';
import reducers from './reducers';

const styles = {
  fontFamily: 'sans-serif'
};

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const App = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div style={styles}>
      <Hello />
    </div>
  </Provider>
);

render(<App />, document.getElementById('root'));
