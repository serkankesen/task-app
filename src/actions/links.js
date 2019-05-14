export const NEW_LINK = "NEW_LINK";

export const UPDATE_LINK_VOTE = "UPDATE_LINK_VOTE";

export function onNewLinkSubmit(link){
	return dispatch => {
		dispatch({
			type: "NEW_LINK",
			link
		})
	}
}

export function onUpdateLinkSubmit(link){
	return dispatch => {
		dispatch({
			type: "UPDATE_LINK_VOTE",
			link
		})
	}
}