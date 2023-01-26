import thunk from 'redux-thunk';
import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import authSlice from './eastern-light/reducer/reducer';

const initState = {};
const rootredcuer = combineReducers({
  auth: authSlice,
});
const store = createStore(rootredcuer, initState, applyMiddleware(thunk));
export default store;