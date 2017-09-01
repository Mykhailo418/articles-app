export default store => next => action => {
	if(!action.run_logger){
		return next(action);
	}
	console.log('-- START Logger --');
	console.log('before','store: ', store.getState());
	console.log('action: ', action);
	next(action);
	console.log('after','store: ', store.getState());
	console.log('-- END Logger --');
	
}