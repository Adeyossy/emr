import PouchDB from 'pouchdb';
import { getCurrentUser } from './auth';

let dbName = "";

let patientsDB = null;

const iam = {
  "apikey": "3lz3rnXiAu1rAe_JbyM8NdQJmPGqeoAV2bKI2RinDZKK",
  "host": "958c9646-c639-4883-a1bd-c90b136518ae-bluemix.cloudantnosqldb.appdomain.cloud",
  "iam_apikey_description": "Auto-generated for key 8f891658-85e5-47b5-af00-967aed814636",
  "iam_apikey_name": "Service credentials-1",
  "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
  "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/94da1d88e2254c1eb153932397cfad89::serviceid:ServiceId-f0dafdca-41f1-4b86-9407-63db3769bd2a",
  "password": "c6621874fc1b2303e40a0a77f42bc5b6",
  "port": 443,
  "url": "https://apikey-v2-1tnjrz93x68an3wfjtzpts17cull47mf9380zxkl3j2w:c6621874fc1b2303e40a0a77f42bc5b6@958c9646-c639-4883-a1bd-c90b136518ae-bluemix.cloudantnosqldb.appdomain.cloud",
  "username": "apikey-v2-1tnjrz93x68an3wfjtzpts17cull47mf9380zxkl3j2w"
}

// function changeDbName(user) {
//   if (user !== null) {
//     if (user.email === "johndoe@mail.com") {
//       dbName = "patients";
//     }

//     if (user.email === "janedoe@mail.com") {
//       dbName = "patients2";
//     }

//     return dbName;
//   }
// }

// authStateObserver(changeDbName);

export function createDB(user) {
  // patientsDB = new PouchDB(changeDbName(user));
  if (user.email === "jyaria@yahoo.com") {
    dbName = "neuro";
  } else {
    if (user.email === "johndoe@mail.com") {
      dbName = "default";
    } else {
      dbName = "db".concat(user.uid).toLowerCase();
    }
  }

  patientsDB = new PouchDB(dbName);
  // console.log("dbName => ", dbName);
}

// function fetchFromRemoteOp(callback, user) {
//   console.log("fetchOp user => ", user);
//   // const newDB = changeDbName(user);
//   // patientsDB = new PouchDB(newDB);
// }

export function fetchFromRemote(callback) {
  // console.log("dbName => ", dbName);
  if (patientsDB === null) {
    getCurrentUser(createDB);
  }

  if (patientsDB !== null) {
    patientsDB.replicate.from(iam.url.concat("/").concat(dbName))
    .on("complete", (info) => {
      // console.log("on complete => ", info);
      getOfflineDocs(callback);
      patientsDB.sync(iam.url.concat("/").concat(dbName), { live: true, retry: true })
        .on("change", (info) => {
          // console.log("on change => ", info);
        }).on("paused", (err) => {
          // console.log("on paused => ", err);
        }).on("error", (err) => {
          // console.log("on error => ", err);
        });
    }).on("active", () => {
      // console.log("on active");
    }).on("change", (info) => {
      // console.log("on change => ", info);
    }).on("paused", (err) => {
      // console.log("on paused => ", err);
    }).on("error", (err) => {
      // console.log("on error => ", err);
      getOfflineDocs(callback);
    }).on("denied", (err) => {
      // console.log("on denied => ", err);
    });
  }
}

export function getOfflineDocs(callback) {
  patientsDB.allDocs({ include_docs: true, descending: true }, (error, doc) => {
    
    if (error) {
      console.log("error => ", error);
    }

    callback(doc.rows.map(item => item.doc));
  });
}

export function createNewDoc(patient, callback) {
  // console.log("dbName => ", dbName);
  if (patientsDB === null) {
    getCurrentUser(createDB);
  }

  // console.log('document creation in progress');
  patientsDB.put(patient, (error, doc) => {
    if(error) console.log("error on put =>", error);
// console.log(doc);
  });
}

export function updateOne(patient) {
  return patientsDB.get(patient._id)
  .then(doc => {
    patient._rev = doc._rev;
    return patientsDB.put(patient);
  });
}

export function updateDeleted(patient) {
  return patientsDB.get(patient._id)
  .then(doc => {
    if(patient._rev) {
      doc._rev = patient._rev;
      console.log('doc => ', doc);
      return patientsDB.put(doc);
    }
    else throw new Error("Unable to restore deleted content");
  })
}

export function updateDoc(patient) {
  // console.log("dbName => ", dbName);
  if (patientsDB === null) {
    getCurrentUser(createDB);
  }

  updateOne(patient).then(res => {
    if (!res.ok) console.log('res => ', res);
  })
  .catch(error => {
// console.log("an error occurred => ", error);
  });
}

export function restoreCloudBackup(patients) {
  if (patientsDB === null) {
    getCurrentUser(createDB);
  }

  return Promise.allSettled(patients.map(patient => updateOne(patient)));
  // return patientsDB.bulkDocs(patients);
}

export function restoreFromScratch(patients) {
  if (patientsDB === null) {
    getCurrentUser(createDB);

    patientsDB.destroy().then(res => {
      if (res.ok) {
        getCurrentUser(createDB);
        return patientsDB.bulkDocs(patients);
      }
    })
  }
}

export function deleteDoc(id) {
  // console.log("dbName => ", dbName);
  if (patientsDB === null) {
    getCurrentUser(createDB);
  }

  patientsDB.get(id).then(doc => {
    patientsDB.remove(doc);
  }).catch(error => console.log("Error on delete => ", error));
}

export function closeDB(callback) {
  // console.log("dbName => ", dbName);
  if (patientsDB === null) {
    getCurrentUser(createDB);
  }
  patientsDB.close().then(() => {
    // console.log("db is closed");
    callback();
  }).catch((error) => {
// console.log("error closing database => ", error);
  });
}
