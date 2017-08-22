import React, {Component} from 'react';
import CommentList from './CommentList';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {delete_article} from '../AC/index';

class Article extends Component{
	constructor(){
		super();
	}

	static propTypes = {
		'article': PropTypes.shape({
			'title': PropTypes.string.isRequired,
			'text': PropTypes.string,
			'comments': PropTypes.array
		}).isRequired,
		toggleOpen: PropTypes.func.isRequired,
		isOpen: PropTypes.bool.isRequired,
	}

	shouldComponentUpdate(nextProps,NextState){
		return nextProps.isOpen != this.props.isOpen || nextProps.article.comments != this.props.article.comments;
	}

	componentDidUpdate(){
		//console.log('Did update '+this.props.article.title);
	}

	render(){
		let {article,toggleOpen,isOpen} = this.props;
		console.log('Article - render');
		return(
			<div>
				<h3 onClick={toggleOpen} className="arcticle-title">{article.title}</h3>
				<button onClick={this.deleteArticle} className="btn-delete">Remove</button>
				<div>
					{this.showText(isOpen)}
				</div>
				{this.showComments()}
			</div>
		);
	}

	showText(isOpen){
		return isOpen && <p>{this.props.article.text}</p>;
	}

	showComments(){
		let {id} = this.props.article;
		console.log('Article - showComments',this.props.article.comments);
		return this.props.isOpen && <CommentList articleId={id} comments={this.props.article.comments} />;
	}

	deleteArticle = e =>{
		e.preventDefault();

		let {delete_article,article} = this.props;
		if( confirm('Do you want to delete article with id = '+article.id) ){
			delete_article(article.id);
		}
 	}

}


export default connect(null,{delete_article})(Article);