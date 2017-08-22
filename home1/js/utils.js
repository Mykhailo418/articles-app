export const sortArrayToId = (obj_arr) => {
	return obj_arr.reduce((arr,obj)=>({
		...arr,
		[obj.id] : obj
	}),{});
};