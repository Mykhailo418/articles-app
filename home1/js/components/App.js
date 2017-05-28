import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import Filters from './Filters';
import Counter from './Counter';

class App extends Component{
	render(){
		return(
			<section className="section-app">
				<Counter />
				<Filters />
				<ArticleList />
			</section>
		);
	}
}

export default App;