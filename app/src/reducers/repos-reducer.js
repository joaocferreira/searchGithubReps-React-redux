const initialReposState = [];

const reposReducer = (state = initialReposState, action) => {
  if (action.type === 'ADD_REPOS') {
    return action.data;
  }
  return state;
};

export default reposReducer;