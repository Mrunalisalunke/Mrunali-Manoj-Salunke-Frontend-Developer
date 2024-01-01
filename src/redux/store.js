import { createStore } from 'redux';
import capsuleReducer from './reducers';

const store = createStore(capsuleReducer);

export default store;
