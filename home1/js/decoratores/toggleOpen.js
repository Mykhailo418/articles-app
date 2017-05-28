import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class DecoratorComponent extends ReactComponent{
	state = {
		isOpen : false
	}

	toggleOpen = e =>{
		e && e.preventDefault && e.preventDefault();
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return <OriginalComponent {...this.props} toggleOpen={this.toggleOpen} isOpen={this.state.isOpen} />
	}
}