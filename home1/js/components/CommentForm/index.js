import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CommentForm extends Component{
	constructor(){
		super();
	}

	state = {
		name : '',
		msg : '',
	}

	static propTypes = {

	}

	render(){
		return(
			<div className="comment-form">
				<form onSubmit={this.submitForm}>
					<div className="form-item">
						<label>Name:</label>
						<input type="text" name="name" value={this.state.name} onChange={this.handleChange('name')} className={this.getClassName('name')} />
					</div>
					<div className="form-item">
						<label>Message:</label>
						<textarea name="msg" onChange={this.handleChange('msg')} value={this.state.msg} className={this.getClassName('msg')}></textarea>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}

	getClassName = type =>{
		return this.state[type] && this.state[type].length < 10 ? 'error' : '';
	}

	handleChange = item => e =>{
		let value = e.target.value;

		switch(item){
			case 'name':
				if(value.length > 20){
					return;
				}
				this.setState({
					name: value
				});
			break;
			case 'msg':
				if(value.length > 40){
					return;
				}
				this.setState({
					msg: value
				});
			break;
		}
	}

	submitForm = e =>{
		e.preventDefault();
		if(this.state.name.length < 10 || this.state.msg.length < 10){
			console.log('Error!');
		}else{
			console.log(this.state.name,this.state.msg);
		}
	}

}

export default CommentForm;