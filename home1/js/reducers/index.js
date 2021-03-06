import {combineReducers} from 'redux';
import counterReducer from './counter';
import articlesReducer from './articles';
import commentsReducer from './comments';
import filtersReducer from './filters';

export default combineReducers({
	comments: commentsReducer,
	counter: counterReducer,
	articles: articlesReducer,
	filters: filtersReducer
});