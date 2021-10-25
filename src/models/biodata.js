export const biodata = {
  firstname: "",
  middlename: "",
  lastname: "",
  ageinyears: "",
  gender: "",
  occupation: "",
  maritalstatus: "",
  address: "",
  religion: "",
  tribe: "",
  informant: "",
  hospital: "",
  id: "",
  phone_number: "",
  email_address: "",
  next_of_kin: ""
}

function populateBiodata(source){
  return Object.assign(biodata, source);
}

function updateField(field, value){
  this[field] = value;
}