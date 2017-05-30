import {INCREMENT,ADD_FILTETRS,DELETE_ART} from '../constants.js';

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