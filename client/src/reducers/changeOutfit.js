import initialState from '../initialState';

const changeOutfit = (state = initialState.outfit, action) => {
  if (action.type === 'CHANGE_OUTFIT') {
    return action.outfit;
  }
  return state;
};

export default changeOutfit;