import { getAllPatients  } from "../actions/patient.actions";
import { RECEIVE_PATIENTS, REQUEST_PATIENTS } from "../types/patient.types";

export const initialState: string[] = [

];

export const patientsReducers = (state : string[] = initialState, action : any) => {
    switch (action.type) {
        case REQUEST_PATIENTS:
            return getAllPatients ()
        case RECEIVE_PATIENTS:
            return action.patients;
        default:
            return state;
    }
}