import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import { createRoot } from "react-dom/client";
import store from './store';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={ store }>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider>,
);

if (window.Cypress) {
  window.store = store;
}
