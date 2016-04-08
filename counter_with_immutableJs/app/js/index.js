import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from 'containers/App';
import Reducers from 'reducers/reducers';

let store = createStore(Reducers);

ReactDom.render(
  /**
   * 將 store 以 prop 的方式傳給 Provider
   * Provider 將 store 設定為 React context
   * 讓 Provider 的 child components 以 context 的方式取得 store
   * 在 App 的 connect 後便以 context 的方式取得 store
   */
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
