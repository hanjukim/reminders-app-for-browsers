/* @flow */
import type { TaskSchema, ReduxAction } from 'types';

export const CREATE_TASK = "CREATE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const DELETE_TASK = "DELETE_TASK";

export function createTask(newTask:TaskSchema):ReduxAction {
	return {
		type: CREATE_TASK,
		payload: {
			value: newTask
		}
	};
}

export function updateTask(id:string, newTask:TaskSchema): ReduxAction {
	return {
		type: UPDATE_TASK,
		payload: {
			id,
			value: newTask
		}
	};
}

export function deleteTask(id:string):ReduxAction {
	return {
		type: DELETE_TASK,
		payload: {
			id
		}
	};
}