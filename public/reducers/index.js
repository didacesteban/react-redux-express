import {combineReducers} from 'redux';
import counterApp from './reducers';

const allReducers = combineReducers({
    counterApp: Add
});

export default allReducers
