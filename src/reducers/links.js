import {
	NEW_LINK,
	UPDATE_LINK_VOTE
} from '../actions/links';
import { fromJS } from 'immutable';

const initialState = {
	done: false,
	error: {},
	link: []
};

export default (state = initialState, action) => {
	switch (action.type){
		case NEW_LINK:
			return {
				...state.link,
				done: true
			}
		case UPDATE_LINK_VOTE:
			return {
				...state,
				done: true
			};
		default:
			return state;
	}
}