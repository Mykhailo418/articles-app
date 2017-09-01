import {normalizedArticles as defaultArticles} from '../fixtures';
import {DELETE_ART,ADD_COMMENT,GET_ALL_ARTICLES,SUCCESS,START} from '../constants.js';
import {sortArrayToId} from '../utils.js';
import {Record, OrderedMap} from 'immutable';

const ArticleRecord = Record({
	"id": null,
    "date": null,
    "title": '',
    "text": '',
    "comments": [] 
});

const DefaultReducerState = Record({
	entities: new OrderedMap,
	loading: false,
	loaded: false
});

export default (articles = new DefaultReducerState(), action) => {
	let {type,payload} = action;

	switch(type){
		case DELETE_ART:
			console.log('delete articles',payload.id,articles,articles.get(payload.id));
			return articles.deleteIn(['entities',payload.id]);
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
		case GET_ALL_ARTICLES + START:
			return articles.set('loading',true);
		break;
		case GET_ALL_ARTICLES + SUCCESS:
			const {response} = action;
			return articles
				.set('entities',sortArrayToId(response,ArticleRecord))
				.set('loading',false)
				.set('loaded',true);
		break;
	}
	return articles;
}