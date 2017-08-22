export default store => next => action => {
	if(!action.run_logger){
		next(action);
	}else{
		console.log('-- START Logger --');
		console.log('before','store: ', store.getState());
		console.log('action: ', action);
		next(action);
		console.log('after','store: ', store.getState());
		console.log('-- END Logger --');
	}
}