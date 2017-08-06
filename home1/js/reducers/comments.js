import {normalizedComments as defaultComments} from '../fixtures';

const arrComments = defaultComments.reduce(function(acc,comment){
	acc[comment.id] = comment;
	return acc;
},{});

export default (comments = defaultComments,action) => {
	const {type,payload} = action;

	return comments;
}