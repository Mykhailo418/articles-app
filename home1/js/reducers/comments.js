import {normalizedComments as defaultComments} from '../fixtures';
import {DELETE_ART,ADD_COMMENT} from '../constants.js';
import {sortArrayToId} from '../utils.js';

export default (comments = sortArrayToId(defaultComments), action) => {
	const {type,payload} = action;
	switch(type){
		case ADD_COMMENT:
			const {random_id} = action;
			if(random_id){
				console.log(payload.comment);
				return comments.set(random_id,{
						...payload.comment,
						id: random_id,
					});
				/*return {
					...comments,
					[random_id] : {
						...payload.comment,
						id: random_id,
					}
				};*/
			}
		break;
	}
	return comments;
}