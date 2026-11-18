import { combineReducers, legacy_createStore as createStore } from 'redux';
import cartReducer from './cartReducer';

const store = createStore(combineReducers({ cart: cartReducer }));

export default store;
