import {
	FETCH_LINKS_PENDING,
	FETCH_LINKS_FULFILLED,
	FETCH_LINKS_REJECTED,

	DELETE_LINK_PENDING,
	DELETE_LINK_FULFILLED,
	DELETE_LINK_REJECTED
} from '../actions/links';

const initialState = {
	fetching: false,
	linkList: [],
	error: {}
};

export default (state = initialState, action) => {
	switch (action.type){
		case FETCH_LINKS_PENDING:
			return {
				...state,
				fetching: true
			};
		case FETCH_LINKS_FULFILLED:
			return {
				...state,
				linkList: action.payload,
				fetching: false
			};
		case FETCH_LINKS_REJECTED:
			return {
				...state,
				error: action.payload,
				fetching: false
			};

		// DELETE_LINK
		case DELETE_LINK_PENDING:
			return {
				...state,
			};
		case DELETE_LINK_FULFILLED:
			return {
				...state,
				linkList: state.linkList.filter(item => item._id !== action.payload.id),
			};
		case DELETE_LINK_REJECTED:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
}