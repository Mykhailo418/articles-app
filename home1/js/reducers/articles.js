import {articles as defaultArticles} from '../fixtures';
import {DELETE_ART} from '../constants.js';

export default (articles = defaultArticles,action) => {
	let {type,payload} = action;

	switch(type){
		case DELETE_ART:
			if(payload && payload.id){
				return articles.filter(item => item.id !== payload.id);
			}else{
				console.error('error delete article');
			}
		break;
	}
	return articles;
}