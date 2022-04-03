import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtolls-extension';
import thunk from 'redux-thunk';
import rootReducer from '../caminho do arquivo';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

export default store;