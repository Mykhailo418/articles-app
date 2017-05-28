import React from 'react';
import Article from './Article';
import Accordion from '../decoratores/accordion';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function ArticleList({articles,toggleItem,isItemOpened}){
	let elements = articles.map(
			article => <li key={article.id} >
				<Article article={article} 
				toggleOpen={toggleItem(article.id)} 
				isOpen={isItemOpened(article.id)} />
			</li>
		);
	return (
		<ul>
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
		articles: storeState.articles
	}
}

export default connect(mapSateToProps,null)(Accordion(ArticleList));