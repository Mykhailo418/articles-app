import React, {Component} from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm/index';
import ToggleOpen from '../decoratores/toggleOpen';
import PropTypes from 'prop-types';

function CommentList({isOpen,toggleOpen,comments,articleId}){
	let show_title = 'show comments';
	if(isOpen){
		show_title = 'hide comments';
	}
	return (
		<div className="comments-wrap">
			<a href="#" className="show-comments-link" onClick={toggleOpen}>{show_title}</a>
			{commentsShow(isOpen,comments,articleId)}
		</div>
	);
}

function commentsShow(isOpen,comments,articleId){
	if(isOpen){

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
		return false;
	}
}

CommentList.propTypes = {
	comments: PropTypes.array,
	toggleOpen: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
}

export default ToggleOpen(CommentList);