export const searchOneForName = (name, patient) => {
  const apntmnt = patient[patient.last_viewed];
  const lastname = apntmnt.biodata.lastname ? apntmnt.biodata.lastname : "";
  const firstname = apntmnt.biodata.firstname ? apntmnt.biodata.firstname : "";
  const names = lastname.concat(" ", firstname);
  const namesBackward = firstname.concat(" ", apntmnt.biodata.lastname);
  return names.toLowerCase().includes(name.toLowerCase()) ||
    namesBackward.toLowerCase().includes(name.toLowerCase());
}

export const searchForName = (name, patients) => {
  const fullNames = patients.map(patient =>
    [
      `${patient[patient.last_viewed].biodata.lastname} ${patient[patient.last_viewed].biodata.firstname}`,
      `${patient[patient.last_viewed].biodata.firstname} ${patient[patient.last_viewed].biodata.lastname}`
    ]);
  return fullNames.find(arr => 
    arr[0].toLowerCase().includes(name.toLowerCase()) || 
    arr[1].toLowerCase().includes(name.toLowerCase()));
}

export const searchOneForId = (id, patient) => {
  return patient[patient.last_viewed].biodata.id.includes(id);
}

export const searchForId = (id, patients) => {
  const ids = patients.map(patient => patient[patient.last_viewed].biodata.id);
  return ids.find(patientId => patientId.toString().includes(id.toString()));
}

export const searchOne = (input, patient) => {
  if (parseInt(input)) return searchOneForId(input, patient);
  return searchOneForName(input, patient);
}

export const search = (input, patients) => {
  const toNumber = parseInt(input);
  if(toNumber) return searchForId(input, patients);
  return searchForName(input, patients);
}