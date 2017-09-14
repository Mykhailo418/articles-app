import React, {Component} from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm/index';
import ToggleOpen from '../decoratores/toggleOpen';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {get_comment} from '../AC/index';
import Loading from './Loading';


class CommentList extends Component{
	constructor(){
		super();
	}

	static propTypes = {
		comments: PropTypes.array,
		toggleOpen: PropTypes.func.isRequired,
		isOpen: PropTypes.bool.isRequired,
		articleId: PropTypes.string,
		article: PropTypes.object
	}

	componentWillReceiveProps({isOpen,articleId,get_comment,article:{commentsLoading,commentsLoaded}}){
		if(isOpen && get_comment && !commentsLoading && !commentsLoaded){
			get_comment(articleId);
		}
	}

	render(){
		const {isOpen,toggleOpen,comments,articleId,article} = this.props;
		console.log('comments',comments);
		let show_title = 'show comments';
		if(isOpen){
			show_title = 'hide comments';
		}
		return (
			<div className="comments-wrap">
				<a href="#" className="show-comments-link" onClick={toggleOpen}>{show_title}</a>
				{this.commentsShow(isOpen,comments,articleId,article)}
			</div>
		);
	}

	commentsShow(isOpen,comments,articleId,article){
		const {commentsLoading,commentsLoaded} = article;
		console.log('-----------loading',commentsLoading,commentsLoaded);
		if(!isOpen){
			return null;
		}
		if(commentsLoading){
			return <Loading />;
		}
		if(commentsLoaded){

			if(!comments || !comments.length){
				return (
					<div>
						<p>No comments yet</p>
						<CommentForm articleId={articleId} />
					</div>
				);
			}
			let comments_output = comments.map(
				id => <li key={id} id={id}><Comment id={id} /></li>
			);
			return (
				<div>
					<ul className="comments">{comments_output}</ul>
					<CommentForm articleId={articleId} />
				</div>
			);
		}else{
			return null;
		}
	}
}


export default connect(null,{get_comment})(ToggleOpen(CommentList));