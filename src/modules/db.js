import PouchDB from 'pouchdb';

const patientsDB = new PouchDB("patients");

const iam = {
  "apikey": "Tk0RBcjRB18XC-ok6TlQmZv1MaT9z5q5bkgmBMJY1C-3",
  "host": "01a1e1b5-f52c-4c0a-955a-986e456beb6d-bluemix.cloudantnosqldb.appdomain.cloud",
  "iam_apikey_description": "Auto-generated for key f0a3c6b1-3940-40fb-a2f1-94a0b7491668",
  "iam_apikey_name": "Service credentials-1",
  "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
  "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/94da1d88e2254c1eb153932397cfad89::serviceid:ServiceId-e5cdf176-d594-4f34-93ff-24478142a04c",
  "url": "https://01a1e1b5-f52c-4c0a-955a-986e456beb6d-bluemix.cloudantnosqldb.appdomain.cloud",
  "username": "01a1e1b5-f52c-4c0a-955a-986e456beb6d-bluemix"
}

export function getOfflineDocs(callback) {
  patientsDB.allDocs({ include_docs: true, descending: true }, (error, doc) => {
    console.log("doc => ", doc.rows);
    if (error) {
      console.log("error => ", error);
    }

    callback(doc.rows);
  });
}

export function createNewDoc(patient, callback) {
  patientsDB.put(patient, (error, doc) => {
    if (!error)
      console.log("doc to be put or already put =>", doc);

    console.log("error on put =>", error);
  });
}

export function updateDoc(patient) {
  patientsDB.get(patient._id).then(doc => {
    patient._rev = doc._rev;
    return patientsDB.put(patient)
  }).catch(error => {
    console.log("an error occurred => ", error);
  });
}

export function deleteDoc(id) {
  patientsDB.get(id).then(doc => {
    patientsDB.remove(doc);
  }).catch(error => console.log("Error on delete => ", error));
}
