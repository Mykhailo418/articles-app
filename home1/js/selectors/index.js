import {createSelector} from 'reselect';

export const articlesGetter = state => state.articles;
export const filtersGetter = state => state.filters;
export const commentsGetter = state => state.comments;
export const idGetter = (state,props) => props.id;

export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles,filters) => {
	var results = [];
	results = articles.filter( article => {
		var check = true;
		if(article && filters){
			if (filters.exclude && filters.exclude.length) {
				for(var key in filters.exclude){
					if(filters.exclude[key] == article.id){
						check = false;
					}
				}
			}
			if (filters.dateRange) {
				let {from,to} = filters.dateRange;
				var date_article = new Date(article.date);
				if(from){
					var date_from = new Date(from);
					if (date_article.getTime() < date_from.getTime()) {
						check = false;
					}
				}
				if(to){
					var date_to = new Date(to);
					if (date_article.getTime() > date_to.getTime()) {
						check = false;
					}
				}
			}
		}
		return check;
	});

	return results;
});

export const commentsSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments,id) => {
	console.log('-- Comments Selector Factory');
	if(id || id == 0){
		return comments.get(id);
	}else{
		return comments;
	}
});