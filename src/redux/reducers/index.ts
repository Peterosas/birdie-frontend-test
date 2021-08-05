

import { combineReducers } from 'redux';

export type RootState = Readonly<{
  pageActive?: number;
}>;

const appReducer = combineReducers<RootState>({});

const rootReducer = (state: any, action: any) => {
    if (action.type === 'RESET_APP') {
      state = undefined;
    }
  
    return appReducer(state, action);
}


export default rootReducer;