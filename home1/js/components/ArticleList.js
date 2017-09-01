import React, {Component} from 'react';
import Article from './Article';
import Loading from './Loading';
import Accordion from '../decoratores/accordion';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {filtratedArticlesSelector} from '../selectors/index.js';
import {mapToArr} from '../utils';
import {get_all_articles} from '../AC/index.js';


class ArticleList extends Component{
	constructor(){
		super();
	}

	componentDidMount(){
		let {isLoading,get_all_articles,isLoaded} = this.props;
		if(!isLoading && !isLoaded && get_all_articles){
			get_all_articles();
		}
		//console.log('Did update '+this.props.article.title);
	}

	render(){
		const {articles,toggleItem,isItemOpened,isLoading,isLoaded} = this.props;
		if(isLoading){ 
			return(
				<Loading />
			); 
		}
		if(isLoaded){
			let elements = mapToArr( articles.map(article => {
				return(
					<li key={article.id} className="article" >
						<Article article={article} 
							toggleOpen={toggleItem(article.id)} 
							isOpen={isItemOpened(article.id)} />
					</li>
				);
			}) );

			//console.log('render Articles');
			return (
				<ul className="articles">
					{elements}
				</ul>
			);
		}else{return(null);}
	}
}

ArticleList.propTypes = {
	articles: PropTypes.object.isRequired,
	toggleItem: PropTypes.func,
	isItemOpened: PropTypes.func,
}

function mapSateToProps(storeState){
	//console.log('mapSateToProps - ArticleList');
	return{
		articles: filtratedArticlesSelector(storeState),
		isLoading: storeState.articles.loading,
		isLoaded: storeState.articles.loaded
	}
}


export default connect(mapSateToProps,{get_all_articles})(Accordion(ArticleList));