import axios, { AxiosError, AxiosResponse } from "axios";
import { RECEIVE_PATIENTS, REQUEST_PATIENTS } from "../types/patient.types"

export const getAllPatients = async () => {
    let patients: string[] = [];

    await axios.get(process.env.REACT_APP_API_URL + '/patients')
    .then((res : AxiosResponse) => {
        if (res.data.status === 200) {
            patients = res.data.data;
        }
    })
    .catch((err : AxiosError) => {
        throw Error;
    })

    return {
        type : REQUEST_PATIENTS,
        patients
    };
}

export const receivePatients = (patients : string[]) => ({
    type: RECEIVE_PATIENTS,
    patients
})