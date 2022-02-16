import initialState from '../initialState';

const changeLoadingStatus = (state = initialState.isLoading, action) => {
  if (action.type === 'CHANGE_LOADING') {
    return action.isLoading;
  }
  return state;
};

export default changeLoadingStatus;