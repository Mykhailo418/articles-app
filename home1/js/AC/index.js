import {INCREMENT,ADD_FILTETRS,DELETE_ART,RUN_LOGGER,ADD_COMMENT} from '../constants.js';

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