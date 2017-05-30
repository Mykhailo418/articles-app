import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DayPicker, { DateUtils } from "react-day-picker";

// Styles
import "react-day-picker/lib/style.css";

class DateRange extends Component{
	constructor(){
		super();
	}

	static propTypes = {
		date: PropTypes.object.isRequired,
		handleFilter: PropTypes.func.isRequired,
	}

	render(){
		const { from, to } = this.props.date;
		return (
			<DayPicker
				numberOfMonths={1}
          		selectedDays={[from, { from, to }]}
				onDayClick={this.props.handleFilter('date')}
			/>
		);
	}

	handleDayClick = (day) => {
		const range = DateUtils.addDayToRange(day, this.state);
		this.props.handleFilter('date',range);
	};
}

export default DateRange;
