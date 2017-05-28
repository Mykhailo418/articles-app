import {combineReducers} from 'redux';
import counterReducer from './counter';
import articlesReducer from './articles';

export default combineReducers({
	counter: counterReducer,
	articles: articlesReducer
});