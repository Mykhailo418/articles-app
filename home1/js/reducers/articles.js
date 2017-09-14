import {normalizedArticles as defaultArticles} from '../fixtures';
import {DELETE_ART,ADD_COMMENT,GET_ALL_ARTICLES,SUCCESS,START,GET_ARTICLE,GET_COMMENT} from '../constants.js';
import {sortArrayToId} from '../utils.js';
import {Record, OrderedMap} from 'immutable';

const ArticleRecord = Record({
	"id": null,
    "date": null,
    "title": '',
    "text": '',
    "comments": [],
    "loading": false,
    "loaded": false,
    "commentsLoading": false,
    "commentsLoaded": false
});

const DefaultReducerState = Record({
	entities: new OrderedMap,
	loading: false,
	loaded: false
});

export default (articles = new DefaultReducerState(), action) => {
	const {type,payload,response,error} = action;
	if(payload){
		var {articleId} = payload;
	}

	switch(type){
		case DELETE_ART:
			console.log('delete articles',payload.id,articles,articles.get(payload.id));
			return articles.deleteIn(['entities',payload.id]);
		break;
		case ADD_COMMENT:
			let {random_id} = action;
			console.log('add comment',articles.entities);
			return articles.updateIn(['entities',articleId,'comments'], (comments) =>{
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
			return articles
				.set('entities',sortArrayToId(response,ArticleRecord))
				.set('loading',false)
				.set('loaded',true);
		break;
		case GET_ARTICLE + START:
			console.log('get article start',articleId);
			return articles.setIn(['entities',articleId,'loading'],true);
		break;
		case GET_ARTICLE + SUCCESS:
			return articles
				.setIn(['entities',articleId],new ArticleRecord(response))
				.setIn(['entities',articleId,'loaded'],true);
		break;
		case GET_COMMENT + START:
			console.log('comments loading START',articleId);
			return articles.setIn(['entities',articleId,'commentsLoading'],true);
		break;
		case GET_COMMENT + SUCCESS:
		console.log('reducer - get comment - success',articleId)
			return articles
				.setIn(['entities',articleId,'commentsLoading'],false)
				.setIn(['entities',articleId,'commentsLoaded'],true);
		break;
	}
	return articles;
}