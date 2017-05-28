import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DateRange from "./DateRange";
import SelectField from './SelectField';

class Filters extends Component{
	render(){
		return(
			<div className="div-filters">
				<div className="col-sm-6">
					<SelectField />
				</div>
				<div className="col-sm-6">
					<DateRange />
				</div>
			</div>
		);
	}
}

export default Filters;