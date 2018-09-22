/* @flow */
import React, { Component } from 'react';
import store from 'store';
import ListPanelContainer from 'containers/ListPanelContainer';
import TaskPanel from 'components/TaskPanel';
import styles from './styles.scss';

class RemindersApp extends Component<{}, {}> {
	inspectStore = () => {
		console.log(store.getState());
	}
    render() {
        return (
			<div className={styles.app}>
				<ListPanelContainer />
				<TaskPanel />

				{/* Button for check store manually */}
				<button className={styles.inspectButton} onClick={this.inspectStore}>Inspect Store</button>
			</div>
        );
    }
}

export default RemindersApp;