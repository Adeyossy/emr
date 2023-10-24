// This file converts the doctor's data into a csv

export function dataExporterHelper(patients, fields) {
  // @param patients: an array of patient object data
  // @param fields: an object with string values for each property
  
  delete fields.downloadFile;
  return patients.map((patient, index) => {
    const patientForExport = {};
    const apntmnt = patient[patient.appointment_keys.sort()[0]];
    patientForExport._id = patient._id;
    
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

    patientForExport.complaints = apntmnt.presenting_complaints.complaints
    .map(complaint => complaint.complaint.concat(" x ", complaint.duration)).join();

    // console.log(patient);

    patientForExport.electrical = apntmnt.electrical.notes;
    // console.log('electrical => ', apntmnt.electrical);
    patientForExport.imaging = apntmnt.imaging.notes;
    patientForExport.primary_diagnosis = patient.primary_diagnosis;
    patientForExport.secondary_diagnosis = patient.secondary_diagnosis;

    const values = Object.values(patientForExport).join(';');
    if(index === 0) return Object.keys(patientForExport).join(';').concat("\r\n", values);
    return values;
  })
}