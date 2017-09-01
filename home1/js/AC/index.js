import {INCREMENT,ADD_FILTETRS,DELETE_ART,RUN_LOGGER,ADD_COMMENT,GET_ALL_ARTICLES,GET_ARTICLE} from '../constants.js';

export function increment(){
	const action = {
		type: INCREMENT
	};
	return action;
}

export function delete_article(id){
	const action = {
		type: DELETE_ART,
		payload: {
			id: id
		}
	};
	return action;
}

export function add_filters(obj){
	const action = {
		type: ADD_FILTETRS,
		payload: {
			dateRange: obj.dateRange,
			exclude: obj.exclude			
		}

	};
	return action;
}

export function run_logger(obj){
	const action = {
		type: RUN_LOGGER,
	};
	return action;
}

export function add_comment(comment,articleId){
	const action = {
		type: ADD_COMMENT,
		payload: {
			comment,
			articleId
		},
		random_id: true	
	};
	return action;
}

export function get_all_articles(obj){
	const action = {
		type: GET_ALL_ARTICLES,
		callAPI: 'http://localhost:3001/api/article'
	};
	return action;
}

export function get_article(obj){
	const action = {
		type: GET_ARTICLE
	};
	return action
}