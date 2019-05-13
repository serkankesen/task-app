import { API_BASE } from '../config/env';
import axios from 'axios';

export const FETCH_LINKS_PENDING = "FETCH_LINKS_PENDING";
export const FETCH_LINKS_FULFILLED = "FETCH_LINKS_FULFILLED";
export const FETCH_LINKS_REJECTED = "FETCH_LINKS_REJECTED";

export const DELETE_LINK_PENDING = "DELETE_LINK_PENDING";
export const DELETE_LINK_FULFILLED = "DELETE_LINK_FULFILLED";
export const DELETE_LINK_REJECTED = "DELETE_LINK_REJECTED";

export function fetchLinks(){
	return dispatch => {
		dispatch({
			type: "FETCH_LINKS",
			payload: axios.get(`${API_BASE}/links`)
				.then(result => result.data.links)
		})
	}
}

export function deleteLink(id){
	return dispatch => {
		dispatch({
			type: "DELETE_LINK",
			payload: axios.delete(`${API_BASE}/links/${id}`)
				.then(result => Object.assign({}, result, { id }))
		})
	}
}