import { combineReducers } from 'redux';

import links from './links';
import newLink from './newLink';

export default combineReducers({
	links,
	newLink
})
