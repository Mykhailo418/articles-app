export default store => next => action => {
	if(!action.random_id){
		return next(action);
	}
	next({
		...action,
		random_id: Date.now() + Math.random()
	})
	
}