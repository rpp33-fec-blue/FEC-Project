const changeLoadingStatus = ( status ) => {
  return {
    type: 'CHANGE_LOADING',
    isLoading: status
  };
};

export default changeLoadingStatus;