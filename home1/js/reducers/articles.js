import {normalizedArticles as defaultArticles} from '../fixtures';
import {DELETE_ART,ADD_COMMENT} from '../constants.js';
import {sortArrayToId} from '../utils.js';

export default (articles = sortArrayToId(defaultArticles), action) => {
	let {type,payload} = action;

	switch(type){
		case DELETE_ART:
			if(payload && payload.id){
				const tempArticles = articles;
				for(var k in tempArticles){
					if(tempArticles[k].id == payload.id){
						delete tempArticles[k];
					}
				}
				return Object.assign({}, tempArticles);
			}else{
				console.error('error delete article');
			}
		break;
		case ADD_COMMENT:
			let {random_id} = action;
			let {articleId} = payload;
			/*if( articleId && articles[articleId] ){
				articles[articleId].comments.push(random_id);
			}
			return Object.assign({}, articles);*/
			return {
				...articles,
				[articleId] : {
					...articles[articleId],
					comments: (articles[articleId].comments || []).concat(random_id)
				}
			}
		break;
	}
	return articles;
}