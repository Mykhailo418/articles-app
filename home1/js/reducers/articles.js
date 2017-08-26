import {normalizedArticles as defaultArticles} from '../fixtures';
import {DELETE_ART,ADD_COMMENT} from '../constants.js';
import {sortArrayToId} from '../utils.js';
import {Record} from 'immutable';

const ArticleRecord = Record({
	"id": null,
    "date": null,
    "title": '',
    "text": '',
    "comments": [] 
});

export default (articles = sortArrayToId(defaultArticles,ArticleRecord), action) => {
	let {type,payload} = action;

	switch(type){
		case DELETE_ART:
			console.log('delete articles',articles.get(payload.id));
			return articles.delete(payload.id);
		break;
		case ADD_COMMENT:
			let {random_id} = action;
			let {articleId} = payload;
			return articles.updateIn([articleId,'comments'], (comments) =>{
				return comments.concat(random_id);
			});
			/*return {
				...articles,
				[articleId] : {
					...articles[articleId],
					comments: (articles[articleId].comments || []).concat(random_id)
				}
			}*/
		break;
	}
	return articles;
}