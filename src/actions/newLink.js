import { API_BASE } from '../config/env';
import axios from 'axios';

export const NEW_LINK_PENDING = "NEW_LINK_PENDING";
export const NEW_LINK_FULFILLED = "NEW_LINK_FULFILLED";
export const NEW_LINK_REJECTED = "NEW_LINK_REJECTED";

export const FETCH_LINK_PENDING = "FETCH_LINK_PENDING";
export const FETCH_LINK_FULFILLED = "FETCH_LINK_FULFILLED";
export const FETCH_LINK_REJECTED = "FETCH_LINK_REJECTED";

export const UPDATE_LINK_PENDING = "UPDATE_LINK_PENDING";
export const UPDATE_LINK_FULFILLED = "UPDATE_LINK_FULFILLED";
export const UPDATE_LINK_REJECTED = "UPDATE_LINK_REJECTED";

export function onNewLinkSubmit({ title, cover }){
	return dispatch => {
		dispatch({
			type: "NEW_LINK",
			payload: axios.post(`${API_BASE}/links`, {
				title,
				cover
			})
		})
	}
}

export function onUpdateLinkSubmit({ _id, title, cover }){
	return dispatch => {
		dispatch({
			type: "NEW_LINK",
			payload: axios.put(`${API_BASE}/links/${_id}`, {
				title,
				cover
			})
		})
	}
}

export function fetchLink(id){
	return dispatch => {
		dispatch({
			type: "FETCH_LINK",
			payload: axios.get(`${API_BASE}/links/${id}`)
				.then(result => result.data)
		})
	}
}