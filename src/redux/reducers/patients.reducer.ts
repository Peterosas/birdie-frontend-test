import { RECEIVE_PATIENTS } from "../types/patient.types";

export const initialState: string[] = [

];

export const patientsReducers = (state : string[] = initialState, action : any) => {
    switch (action.type) {
        case RECEIVE_PATIENTS:
            return action.patients;
        default:
            return state;
    }
}