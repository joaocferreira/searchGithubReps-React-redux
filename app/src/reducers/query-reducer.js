const initialQueryState = '';

const queryReducer = (state = initialQueryState, action) => {
  if (action.type === 'TYPE_QUERY') {
    return action.data;
  }
  return state;
};

export default queryReducer;

