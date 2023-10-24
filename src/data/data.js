// This file converts the doctor's data into a csv

export function dataExporterHelper(patients, fields) {
  // @param patients: an array of patient object data
  // @param fields: an object with string values for each property
  // const data = new Array(patients.length).fill({});
  return patients.map(patient => {
    const patientForExport = {};
    const apntmnt = patient[patient.last_viewed];
    
    const fieldsKeys = Object.keys(fields);
    for (let f = 0; f < fieldsKeys.length; f++) {
      const fieldsString = fields[fieldsKeys[f]];
      const field = fieldsString ? fieldsString.split(", ") : []; // field is an array of strings
      // field array contains sections chosen for export
      
      // patientForExport[field] = 
      
      for(let i = 0; i < field.length; i++) {
        const property = field[i];
        // console.log("apntmnt[fieldsKeys[f]] => ", apntmnt[fieldsKeys[f]]);
        // console.log("apntmnt[field] => ", apntmnt[field]);
        // console.log("property => ", property);
        patientForExport[property] = apntmnt[fieldsKeys[f]][property];
      }
    }

    return patientForExport;
  })
}