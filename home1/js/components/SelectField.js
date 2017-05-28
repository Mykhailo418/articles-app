import React, {Component} from 'react';
import DayPicker, { DateUtils } from "react-day-picker";
import Select from 'react-select';

import 'react-select/dist/react-select.css';

class SelectField extends Component{
	state = {
		selected : null
	}

	render(){
		let options = [
		  { value: 'one', label: 'One' },
		  { value: 'two', label: 'Two' }
		];
		return(
			<Select
			  name="article-filter"
			  value={this.state.selected}
			  options={options}
			  onChange={this.logChange}
			  multi={true}
			/>
		);
	}

	logChange = selected => {
	  console.log("Selected: ", selected);
	  this.setState({ selected })
	}
}

export default SelectField;