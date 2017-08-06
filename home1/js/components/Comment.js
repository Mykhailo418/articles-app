import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {commentsSelectorFactory} from '../selectors/index.js';

function Comment({comment,id}){
	//console.log(comment);
	if(comment){
		return (
			<div className="comment-wrap">
				<h4 className="name-author">{comment.user}</h4>
				<p className="comment-text">{comment.text}</p>
			</div>
		);
	}else{
		return(
			<div className="comment-wrap">
				<p className="comment-text">comment with ID {id} is not found</p>
			</div>
		);
	}
}

Comment.propTypes = {
	'comment': PropTypes.shape({
		'user': PropTypes.string,
		'text': PropTypes.string,
	}),
	'id': PropTypes.number.isRequired
}

function createMapSateToProps(storeState,ownProps){
	const commentSelector = commentsSelectorFactory();
	return function mapSateToProps(storeState,ownProps){
		return{
			comment: commentSelector(storeState,ownProps)
		}
	}
}

export default connect(createMapSateToProps)(Comment);
