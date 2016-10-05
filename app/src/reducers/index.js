import { combineReducers } from 'redux';

import reposReducer from './repos-reducer';
import historyReducer from './history-reducer';
import queryReducer from './query-reducer';

const reducers = combineReducers({
	reposState: reposReducer,
	historyState: historyReducer,
	queryState: queryReducer
});

export default reducers;