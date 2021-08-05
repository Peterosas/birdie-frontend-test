import { RECEIVE_PATIENTS } from "../types/patient.types";
import { initialState, patientsReducers } from "./patients.reducer";

describe('patients reducers', () => {

    it('should return the initial state', () => {
      expect(patientsReducers(undefined, {})).toEqual(initialState);
    });
    it('should handle RECEIVE_PATIENTS', () => {
      const patients : string[] = ["patientA", "patientB", "patientC"];
      expect(
        patientsReducers(initialState, {
          type: RECEIVE_PATIENTS,
          patients
        })
      ).toEqual(patients);
    });

  })