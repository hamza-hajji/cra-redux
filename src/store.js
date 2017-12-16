import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const middlware = [thunk];

export const configureStore = init => {
  return createStore(
    rootReducer,
    init,
    applyMiddleware(...middlware)
  );
}