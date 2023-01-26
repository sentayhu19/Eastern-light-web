import thunk from 'redux-thunk';
import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';

const initState = {};
const rootredcuer = combineReducers({
  
});
const store = createStore(rootredcuer, initState, applyMiddleware(thunk));
export default store;