import { RECEIVE_PATIENTS, REQUEST_PATIENTS } from "../types/patient.types";

const initialState: {patients: string[]} = {
    patients: []
};

type ActionProps = {type: string} & (typeof initialState);

export const patientsReducers = (state = initialState, action : ActionProps) => {
    switch (action.type) {
        case REQUEST_PATIENTS:
            const {patients} = action;
            return {
                ...state,
                patients
            }
        case RECEIVE_PATIENTS:
            return action.patients;
        default:
            return state;
    }
}