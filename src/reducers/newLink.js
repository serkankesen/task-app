import {
	NEW_LINK_PENDING,
	NEW_LINK_FULFILLED,
	NEW_LINK_REJECTED,

	FETCH_LINK_PENDING,
	FETCH_LINK_FULFILLED,
	FETCH_LINK_REJECTED,

	UPDATE_LINK_PENDING,
	UPDATE_LINK_FULFILLED,
	UPDATE_LINK_REJECTED,
} from '../actions/newLink';

const initialState = {
	fetching: false,
	done: false,
	error: {},
	link: {
		fetching: false
	}
};

export default (state = initialState, action) => {
	switch (action.type){
		case NEW_LINK_PENDING:
			return {
				...state,
				fetching: true,
				done: false
			};
		case NEW_LINK_FULFILLED:
			return {
				...state,
				fetching: false,
				done: true
			};
		case NEW_LINK_REJECTED:
			return {
				...state,
				error: action.payload,
				fetching: false
			};

		// FETCH_LINK
		case FETCH_LINK_PENDING:
			return {
				...state,
				link: {
					fetching: true
				}
			};
		case FETCH_LINK_FULFILLED:
			return {
				...state,
				link: {
					...action.payload.link,
					fetching: false
				}
			};
		case FETCH_LINK_REJECTED:
			return {
				...state,
				LINK: {
					fetching: false
				}
			};

		// UPDATE_LINK
		case UPDATE_LINK_PENDING:
			return {
				...state,
				fetching: true,
				done: false
			};
		case UPDATE_LINK_FULFILLED:
			return {
				...state,
				fetching: false,
				done: true
			};
		case UPDATE_LINK_REJECTED:
			return {
				...state,
				error: action.payload,
				fetching: false
			};
		default:
			return state;
	}
}