import { combineReducers } from 'redux';
import logInReducer from './logInReducer';
import searchProductReducer from './searchProductReducer'; 
import productDetailsReducer from './productDetailsReducer'; 
 
export default combineReducers({
    logInReducer,
    searchProductReducer,
    productDetailsReducer
});
