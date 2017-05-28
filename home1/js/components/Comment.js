import React, {Component} from 'react';
import PropTypes from 'prop-types';

function Comment({comment}){
	return (
		<div className="comment-wrap">
			<h4 className="name-author">{comment.user}</h4>
			<p className="comment-text">{comment.text}</p>
		</div>
	);
}

Comment.propTypes = {
	'comment': PropTypes.shape({
		'user': PropTypes.string,
		'text': PropTypes.string,
	}).isRequired
}

export default Comment;
