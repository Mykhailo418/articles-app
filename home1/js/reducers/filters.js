import {ADD_FILTETRS} from '../constants.js';

export default (filters={},action) => {
	let {type,payload} = action;
	switch(type){
		case ADD_FILTETRS:
			return payload;
		break;
	}
	return filters;
}