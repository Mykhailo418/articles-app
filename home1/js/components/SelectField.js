import React, {Component} from 'react';
import DayPicker, { DateUtils } from "react-day-picker";
import PropTypes from 'prop-types';
import Select from 'react-select';
import {connect} from 'react-redux';
import {mapToArr} from '../utils';

import 'react-select/dist/react-select.css';

class SelectField extends Component{

	static propTypes = {
		handleFilter: PropTypes.func.isRequired,
		articles: PropTypes.object
	}

	render(){
		const {articles,selected} = this.props;
		let options = mapToArr( articles.map(article => ({
            label: article.title,
            value: article.id
        })) );
		return(
			<Select
			  name="article-filter"
			  value={selected}
			  options={options}
			  onChange={this.props.handleFilter('selected')}
			  multi={true}
			/>
		);
	}

	logChange = selected => {
		let {handleFilter} = this.props;
	 	handleFilter('selected',selected);
	}
}

function stroeStatetoProps(storeState){
	return {
		articles: storeState.articles
	}
}

export default connect(stroeStatetoProps,null)(SelectField);