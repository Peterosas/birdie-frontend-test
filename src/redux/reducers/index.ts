

import { combineReducers } from 'redux';

const appReducer = combineReducers({});

const rootReducer = (state: any, action: any) => {
    if (action.type === 'RESET_APP') {
      state = undefined;
    }
  
    return appReducer(state, action);
}


export default rootReducer;