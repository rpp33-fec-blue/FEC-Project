import initialState from '../initialState';

const changeMetadata = ( state = initialState.metadata, action ) => {
  if ( action.type === 'CHANGE_METADATA' ) {
    return action.metadata;
  }
  return state;
};

export default changeMetadata;