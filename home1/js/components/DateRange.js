import React, {Component} from 'react';
import DayPicker, { DateUtils } from "react-day-picker";

// Styles
import "react-day-picker/lib/style.css";

class DateRange extends Component{
	constructor(){
		super();
	}

	state = {
		from: null,
    	to: null,
	}

	render(){
		const { from, to } = this.state;
		return (
			<DayPicker
				numberOfMonths={1}
          		selectedDays={[from, { from, to }]}
				onDayClick={this.handleDayClick}
			/>
		);
	}

	handleDayClick = (day) => {
	    const range = DateUtils.addDayToRange(day, this.state);
    	this.setState(range);
	};
}

export default DateRange;
