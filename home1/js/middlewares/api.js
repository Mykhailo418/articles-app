import {SUCCESS,ERROR,START} from '../constants.js';

export default store => next => action => {
	const {callAPI,type,...rest} = action;
	if(!callAPI){ return next(action);}

	next({
		...rest,
		type: type + START
	});

	console.log('callAPI',type,callAPI);
	const url = action.callAPI;

	fetch(url,{
		mode: 'cors',
		method: 'GET'
	}).then((res)=>{
		return res.json();
	}).then((res)=>{
		console.log(res);
		next({
			...rest,
			type: type + SUCCESS,
			response : res
		});
	}).catch((error)=>{
		console.log('error',error);
		next({
			...rest,
			type: type + ERROR,
			error : error
		});
	});
}