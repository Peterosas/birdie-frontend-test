

import { combineReducers } from 'redux';

import { patientsReducers } from './patients.reducer';


const appReducer = combineReducers({patients: patientsReducers});

const rootReducer = (state: any, action: any) => {
    if (action.type === 'RESET_APP') {
      state = undefined;
    }
  
    return appReducer(state, action);
}


export default rootReducer;