import thunk from 'redux-thunk';
import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import { authreducer , catagoryreducer, productreducer } from './eastern-light/reducer/reducer';

const initState = {};
const rootredcuer = combineReducers({
  auth: authreducer,
  catagory: catagoryreducer,
  products: productreducer,
});
const store = createStore(rootredcuer, initState, applyMiddleware(thunk));
export default store;