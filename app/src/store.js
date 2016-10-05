import { createStore, combineReducers } from 'redux';

const initialReposState = [];

const initialHistoryState = [];

const initialQueryState = '';

const reposReducer = (state = initialReposState, action) => {
  if (action.type === 'ADD_REPOS') {
    return action.data;
  }
  return state;
};

const queryReducer = (state = initialQueryState, action) => {
  if (action.type === 'TYPE_QUERY') {
    return action.data;
  }
  return state;
};

const historyReducer = (state = initialHistoryState, action) => {
  if (action.type === 'MAKE_QUERY') {
    let newState = state.concat([action.data]);
    return newState;
  }
  return state;
};

const reducers = combineReducers({
	reposState: reposReducer,
	historyState: historyReducer,
	queryState: queryReducer
});

const store = createStore(reducers);

export default store;