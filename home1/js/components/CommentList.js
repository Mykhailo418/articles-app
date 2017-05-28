import React, {Component} from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm/index';
import ToggleOpen from '../decoratores/toggleOpen';
import PropTypes from 'prop-types';

function CommentList({isOpen,toggleOpen,comments}){
	let show_title = 'show comments';
	if(isOpen){
		show_title = 'hide comments';
	}
	return (
		<div className="comments-wrap">
			<a href="#" className="show-comments-link" onClick={toggleOpen}>{show_title}</a>
			{commentsShow(isOpen,comments)}
		</div>
	);
}

function commentsShow(isOpen,comments){
	if(isOpen){
		if(!comments || !comments.length){
			return (
				<div>
					<p>No comments yet</p>
					<CommentForm />
				</div>
			);
		}
		let comments_output = comments.map(
			comment => <li key={comment.id}><Comment comment={comment} /></li>
		);
		return (
			<div>
				<ul className="comments">{comments_output}</ul>
				<CommentForm />
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