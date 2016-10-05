const initialHistoryState = [];

const historyReducer = (state = initialHistoryState, action) => {
  if (action.type === 'MAKE_QUERY') {
    let newState = state.concat([action.data]);
    return newState;
  }
  return state;
};

export default historyReducer;