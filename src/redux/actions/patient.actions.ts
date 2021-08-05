import { RECEIVE_PATIENTS, REQUEST_PATIENTS } from "../types/patient.types"

export const requestPatients = () => ({
    type : REQUEST_PATIENTS,
})

export const receivePatients = (patients : string[]) => ({
    type :  RECEIVE_PATIENTS,
    patients
})