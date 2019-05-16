export const NEW_LINK = "NEW_LINK";
export const UPDATE_LINK_VOTE = "UPDATE_LINK_VOTE";
export const TRASH_LINK = "TRASH_LINK";

export function onNewLinkSubmit(link) {
  return dispatch => {
    dispatch({
      type: "NEW_LINK",
      link
    });
  };
}

export function onUpdateLinkSubmit(link, vote) {
  return dispatch => {
    dispatch({
      type: "UPDATE_LINK_VOTE",
      link,
      vote
    });
  };
}

export function onRemoveLinkSubmit(link) {
  return dispatch => {
    dispatch({
      type: "TRASH_LINK",
      link
    });
  };
}
