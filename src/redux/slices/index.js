import { combineReducers } from 'redux';
import authReducer from '../slices/auth/index'


export const rootReducer = combineReducers({
    // Add your reducers here
    auth: authReducer,
});
