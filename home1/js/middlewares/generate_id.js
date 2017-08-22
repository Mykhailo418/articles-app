export default store => next => action => {
	if(!action.random_id){
		next(action);
	}else{
		next({
			...action,
			random_id: Date.now() + Math.random()
		})
	}
}