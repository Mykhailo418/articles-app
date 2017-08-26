import React from 'react';
import Article from './Article';
import Accordion from '../decoratores/accordion';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {filtratedArticlesSelector} from '../selectors/index.js';
import {mapToArr} from '../utils';


function ArticleList({articles,toggleItem,isItemOpened,filters}){
	let elements = mapToArr( articles.map(article => {
		return(
			<li key={article.id} className="article" >
				<Article article={article} 
					toggleOpen={toggleItem(article.id)} 
					isOpen={isItemOpened(article.id)} />
			</li>
		);
	}) );

	console.log('render Articles');
	return (
		<ul className="articles">
			{elements}
		</ul>
	);
}

ArticleList.propTypes = {
	articles: PropTypes.object.isRequired,
	toggleItem: PropTypes.func,
	isItemOpened: PropTypes.func,
}

function mapSateToProps(storeState){
	console.log('mapSateToProps - ArticleList');
	return{
		articles: filtratedArticlesSelector(storeState),
		filters: storeState.filters
	}
}


export default connect(mapSateToProps,null)(Accordion(ArticleList));