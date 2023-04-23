import { combineReducers } from 'redux';
import ListReducer from './listItems/listItems';

export default combineReducers({
    listItems: ListReducer,
    useInfo: ListReducer
});
