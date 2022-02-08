import initialState from './initialState';

const changeStyles = ( state = initialState.styles, action ) => {
  if ( action.type === 'CHANGE_STYLES' ) {
    return action.styles;
  }
  return state;
};

export default changeStyles;