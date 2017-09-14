import {INCREMENT,ADD_FILTETRS,DELETE_ART,RUN_LOGGER,ADD_COMMENT,GET_ALL_ARTICLES,GET_ARTICLE,GET_ALL_COMMENTS,START,ERROR,SUCCESS,GET_COMMENT} from '../constants.js';

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
		random_id: true,
		run_logger: true
	};
	return action;
}

export function get_all_articles(){
	const action = {
		type: GET_ALL_ARTICLES,
		callAPI: 'http://localhost:3001/api/article'
	};
	return action;
}

export function get_article(id){
	return (dispatch, getState) => {
		dispatch({
			type: GET_ARTICLE + START,
			payload: {
				articleId: id
			}
		});

		fetch('http://localhost:3001/api/article/'+id,{
			mode: 'cors',
			method: 'GET'
		}).then((res) => {
			return res.json();
		}).then((res) => {
			console.log('success',res);
			dispatch({
				type: GET_ARTICLE + SUCCESS,
				payload: {
					articleId: id,
				},
				response: res
			});
		}).catch((error)=>{
			console.log('error',error);
			next({
				type: GET_ARTICLE + ERROR,
				payload: {
					articleId: id,
				},
				error: error
			});
		});
	}
}

export function get_comment(id){
	const action = {
		type: GET_COMMENT,
		callAPI: 'http://localhost:3001/api/comment?article='+id,
		payload: {
			articleId: id,
		}
	};
	return action;
}