import React, {Component} from 'react';
import CommentList from './CommentList';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {delete_article,get_article} from '../AC/index';
import Loading from './Loading';

class Article extends Component{
	constructor(){
		super();
	}

	static propTypes = {
		'article': PropTypes.shape({
			'title': PropTypes.string.isRequired,
			'text': PropTypes.string,
			'comments': PropTypes.array,
			'comments_loading': PropTypes.bool
		}).isRequired,
		toggleOpen: PropTypes.func.isRequired,
		isOpen: PropTypes.bool.isRequired,
	}

	shouldComponentUpdate(nextProps,NextState){
		console.log('--shouldComponentUpdate - Article - loading', nextProps.article.comments_loading,this.props.article.comments_loading);
		return nextProps.isOpen != this.props.isOpen || 
		nextProps.article.comments != this.props.article.comments ||
		nextProps.article != this.props.article;
	}

	componentWillReceiveProps({isOpen,article,get_article}){
		if(article.loading){
			console.log('componentWillReceiveProps article'+article);
		}
		if(isOpen && !this.props.isOpen && !article.loading && !article.loaded && get_article){
			get_article(article.id);
		}
	}

	render(){
		let {article,toggleOpen,isOpen} = this.props;
		console.log('Article - render');
		return(
			<div>
				<h3 onClick={toggleOpen} className="arcticle-title">{article.title}</h3>
				<button onClick={this.deleteArticle} className="btn-delete">Remove</button>
				{this.get_body(isOpen,article)}
			</div>
		);
	}

	get_body(isOpen,article){
		console.log('loading article body',article.loading);
		if(!isOpen){
			return null;
		}
		if(article.loading){
			return <Loading />;
		}
		if(article.loaded){
			return (
				<div>
					{this.showText(isOpen,article)}
					{this.showComments(article)}
				</div>
			);
		}else{
			return null;
		}
	}

	showText(isOpen,article){
		return isOpen && article.text && <p>{article.text}</p>;
	}

	showComments(article){
		const {id,commentsLoading} = article;
		console.log('Article - showComments');
		return this.props.isOpen && <CommentList comments={article.comments} article={article} articleId={id} />;
	}

	deleteArticle = e =>{
		e.preventDefault();

		let {delete_article,article} = this.props;
		if( confirm('Do you want to delete article with id = '+article.id) ){
			delete_article(article.id);
		}
 	}

}


export default connect(null,{delete_article,get_article})(Article);