import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DateRange from "./DateRange";
import SelectField from './SelectField';
import {connect} from 'react-redux';
import {add_filters} from '../AC/index';
import { DateUtils } from "react-day-picker";

class Filters extends Component{
	constructor(){
		super();
		this.handleFilters = this.handleFilters.bind(this);
	}

	state = {
		selected: null,
		date: {
			from: null,
			to: null
		}
	}
	render(){
		return(
			<div className="div-filters">
				<div className="col-sm-6">
					<SelectField handleFilter={this.handleFilters} selected={this.state.selected} />
				</div>
				<div className="col-sm-6">
					<DateRange handleFilter={this.handleFilters} date={this.state.date} />
				</div>
			</div>
		);
	}

	handleFilters = type => value =>{
		switch(type){
			case 'selected':
				this.setState({
					'selected' : value
				})
			break;
			case 'date':
				const range = DateUtils.addDayToRange(value, this.state.date);
				this.setState({
					'date' : range
				})
			break;
		}
	}
}

export default connect(null,{add_filters})(Filters);