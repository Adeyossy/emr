import React from 'react';

export const PatientContext = React.createContext(null);

export function createPatientContext(value){
  PatientContext = React.createContext(value);
  return PatientContext;
}