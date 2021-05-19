import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import AlertMUITemplate from "react-alert-template-mui";


// const store = createStore(rootReducer, compose(
//   applyMiddleware(thunk),
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// ));

interface IIndexProps {
  [key: string]: any;
}

const store = createStore(
  rootReducer,
  compose(
      applyMiddleware(thunk),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )       

);


ReactDOM.render(

    <Provider store={store} >
      <App />
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
