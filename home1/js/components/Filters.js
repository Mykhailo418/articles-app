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

	render(){
		let {filters} = this.props;
		return(
			<div className="div-filters">
				<div className="col-sm-6">
					<label>Exclude Articles:</label>
					<SelectField handleFilter={this.handleFilters} selected={filters.exclude} />
				</div>
				<div className="col-sm-6">
					<label>Date Range:</label>
					<DateRange handleFilter={this.handleFilters} date={filters.dateRange} />
				</div>
			</div>
		);
	}

	handleFilters = type => value =>{
		let {filters,add_filters} = this.props;
		switch(type){
			case 'selected':
				add_filters({ ...filters,
					exclude: value.map(option => option.value)
				});
			break;
			case 'date':
				const range = DateUtils.addDayToRange(value, filters.dateRange);
				add_filters({
					...filters,
					dateRange: range,
				});
			break;
		}
	}
}

export default connect(stateStore => ({
	filters: stateStore.filters
}),{add_filters})(Filters);