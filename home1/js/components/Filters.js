import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DateRange from "./DateRange";
import SelectField from './SelectField';

class Filters extends Component{
	render(){
		return(
			<div className="div-filters">
				<SelectField />
				<DateRange />
			</div>
		);
	}
}

export default Filters;