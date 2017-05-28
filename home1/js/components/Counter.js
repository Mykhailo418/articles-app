import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment} from '../AC/index';

class Counter extends Component{

	static PropTypes = {
		count: PropTypes.number
	}

	render(){

		return(
			<div className="counter">
				<h3>{this.props.count}</h3>
				<button onClick={this.handleIncrement} className="btn-counter">+1</button>
			</div>
		);
	}

	handleIncrement = e =>{
		e.preventDefault();
		let {increment} = this.props;
		increment();
	}
}

function mapSateToProps(storeState){
	return{
		count: storeState.counter
	}
}

export default connect(mapSateToProps,{increment})(Counter);