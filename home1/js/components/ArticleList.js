import React from 'react';
import Article from './Article';
import Accordion from '../decoratores/accordion';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function ArticleList({articles,toggleItem,isItemOpened,filters}){
	console.log(filters);
	let elements = articles.map(
			article => {
				if(check_article_by_filer(article,filters)){	
					return (<li key={article.id} className="article" >
						<Article article={article} 
						toggleOpen={toggleItem(article.id)} 
						isOpen={isItemOpened(article.id)} />
					</li>);
				}
			}
		);
	return (
		<ul className="articles">
			{elements}
		</ul>
	);
}

ArticleList.propTypes = {
	'articles': PropTypes.array.isRequired,
	toggleItem: PropTypes.func,
	isItemOpened: PropTypes.func,
}

function mapSateToProps(storeState){
	return{
		articles: storeState.articles,
		filters: storeState.filters
	}
}

function check_article_by_filer(article,filters){
	var check = true;
	if(article && filters){
		if (filters.exclude && filters.exclude.length) {
			for(var k in filters.exclude){
				if(filters.exclude[k].value == article.id){
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
}


export default connect(mapSateToProps,null)(Accordion(ArticleList));