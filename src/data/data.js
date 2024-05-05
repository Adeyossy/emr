// This file converts the doctor's data into a csv

function processBasedOnType(data) {
  if (Array.isArray(data)) {
    return data.map(d => processBasedOnType(d)).join(" | ");
  }

  if (typeof data === "object") {
    return Object.keys(data).map(d => `${d}: ${processBasedOnType(data[d])}`).join(", ");
  }

  if (typeof data === "string") return data.replace(/\s/g, " ").replace(/;/g, "");
}

export function dataExporterHelper(patients, fields) {
  // @param patients: an array of patient object data
  // @param fields: an object with string values for each property e.g {biodata: 'firstname'}

  delete fields.downloadFile;
  return patients.flatMap((patient, index) => {
    return patient.appointment_keys.map((apntmntKey, index2) => {
      const patientForExport = {};
      // We're only picking the first appointment here but we need to export all appointments
      const apntmnt = patient[apntmntKey];
      patientForExport._id = patient._id; // export patient id
      patientForExport.appointment_id = apntmntKey;

      const fieldsKeys = Object.keys(fields);
      for (let f = 0; f < fieldsKeys.length; f++) {
        const key = fieldsKeys[f];
        const fieldsString = fields[key]; // 
        const field = fieldsString ? fieldsString.split(", ") : []; // field is an array of strings
        // field array contains sections chosen for export

        // patientForExport[field] = 

        for (let i = 0; i < field.length; i++) {
          const property = field[i];
          // console.log("apntmnt[fieldsKeys[f]] => ", apntmnt[fieldsKeys[f]]);
          // console.log("apntmnt[field] => ", apntmnt[field]);
          // console.log("property => ", property);
          const fieldValue = key !== "others" ? apntmnt[key][property] : apntmnt[property];
          patientForExport[property] = processBasedOnType(fieldValue);
        }
      }

      // patientForExport.complaints = apntmnt.presenting_complaints.complaints
      // .map(complaint => complaint.complaint.concat(" x ", complaint.duration)).join();

      // console.log(patient);

      console.log("apntmnt notes => ", processBasedOnType(apntmnt.notes));
      patientForExport.appointment_notes = processBasedOnType(apntmnt.notes);
      patientForExport.primary_diagnosis = patient.primary_diagnosis;
      patientForExport.secondary_diagnosis = patient.secondary_diagnosis;

      const values = Object.values(patientForExport).join(';');
      if (index === 0 && index2 === 0) 
        return Object.keys(patientForExport).join(';').concat("\r\n", values);
      // console.log("values => ", values);
      return values;
    })
  })
}