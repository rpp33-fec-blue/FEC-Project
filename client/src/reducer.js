import initialState from './initialState';


var rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'todo1': {
      return {
        /*todo*/
      }
    }

    case 'todo2': {
      return {
        /*todo*/
      }
    }

    default: return state
  }
}


export default rootReducer;