import React from 'react';
import Article from './Article';
import Accordion from '../decoratores/accordion';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {filtratedArticlesSelector} from '../selectors/index.js';

function ArticleList({articles,toggleItem,isItemOpened,filters}){
	let elements = [];
	for(var k in articles){
		elements.push(
			<li key={articles[k].id} className="article" >
				<Article article={articles[k]} 
					toggleOpen={toggleItem(articles[k].id)} 
					isOpen={isItemOpened(articles[k].id)} />
			</li>
		);
	}

	console.log('render Articles');
	return (
		<ul className="articles">
			{elements}
		</ul>
	);
}

ArticleList.propTypes = {
	articles: PropTypes.array.isRequired,
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