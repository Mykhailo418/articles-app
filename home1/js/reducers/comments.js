import {normalizedComments as defaultComments} from '../fixtures';
import {DELETE_ART,ADD_COMMENT,GET_COMMENT,SUCCESS,START} from '../constants.js';
import {sortArrayToId} from '../utils.js';
import {Record, OrderedMap, Map} from 'immutable';

const CommentRecord = Record({
	"id": null,
    "user": '',
    "text": ''
});

const DefaultReducerState = Record({
	entities: new OrderedMap({}),
});

export default (comments = new DefaultReducerState(), action) => {
	const {type,payload,response,error} = action;
	switch(type){
		case ADD_COMMENT:
			const {random_id} = action;
			if(random_id){
				console.log(payload.comment);
				return comments.setIn(['entities',random_id], new CommentRecord({
						...payload.comment,
						id: random_id,
					}) );
				/*return {
					...comments,
					[random_id] : {
						...payload.comment,
						id: random_id,
					}
				};*/
			}
		break;
		case GET_COMMENT + SUCCESS:
			if(response){
				return comments.mergeIn(['entities'],sortArrayToId(response,CommentRecord));
			}
		break;
	}
	return comments;
}