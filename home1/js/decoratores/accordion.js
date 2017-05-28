import React, {Component as ReactComp} from 'react';

export default (OriginalComp) => class AccordionComp extends ReactComp{
	state = {
		itemOpen: null
	}

	toggleItem = id => e =>{
		e && e.preventDefault && e.preventDefault();

		this.setState({
			itemOpen: id != this.state.itemOpen && id
		});
	}

	isItemOpened = id =>{
		return this.state.itemOpen == id;
	}

	render(){
		return <OriginalComp {...this.props} toggleItem={this.toggleItem} isItemOpened={this.isItemOpened} />
	}
}