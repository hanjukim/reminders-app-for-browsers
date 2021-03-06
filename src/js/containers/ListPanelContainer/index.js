/* @flow */
import React, { Component } from 'react';
import ListPanel from 'components/ListPanel';
import { createList } from 'actions/List';
import { RandomGenerator } from 'utils';
import type { ListSchema } from 'types';
import { connect } from 'react-redux';
import { register } from 'hook';

interface IListPanelContainerProps {
	dispatch?: Function;
	lists?: Array<ListSchema>;
}

const mapStateToProps = (state) => ({
	lists: state.lists.value
});

@connect(mapStateToProps)
class ListPanelContainer extends Component<IListPanelContainerProps, {}> {
	// Type Defs
	randomGenerator: RandomGenerator

	// Variable Defs
	randomGenerator = new RandomGenerator()

	componentWillMount() {
		register('Update::ListPanelContainer', this.externalForceUpdate);
	}
	externalForceUpdate = () => {
		this.forceUpdate();
	}
	createList = () => {
		const { dispatch } = this.props;
		const newID:number = this.randomGenerator.generateNumber();

		const newList:ListSchema = {
			id: newID.toString(),
			name: `List ${newID}`,
			created_at: new Date(),
			color: this.randomGenerator.generateHexColor()
		};

		if(typeof(dispatch) === 'function') {
			dispatch(createList(newList));
		}

		// I don't know why, but Render doesn't happend even dispatched, I checked every related source codes, but every flow works fine except this.
		// Just for now, I just forcely update, however this must be reported as issue.
		this.forceUpdate();
	}
	render() {
		const { lists } = this.props;

		return (
			<ListPanel createList={this.createList} lists={lists} />
		);
	}
}

export default ListPanelContainer;