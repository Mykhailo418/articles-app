import {INCREMENT} from '../constants.js';
import {DELETE_ART} from '../constants.js';

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