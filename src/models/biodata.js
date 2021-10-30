export const biodata = {
  firstname: "",
  middlename: "",
  lastname: "",
  ageinyears: "",
  gender: "",
  occupation: "",
  maritalstatus: "",
  address: "",
  city: "",
  state: "",
  religion: "",
  tribe: "",
  informant: "",
  hospital: "",
  id: "",
  phone_number: "",
  phone_number_1: "",
  email_address: "",
  next_of_kin: "",
  next_of_kin_relationship: ""
}

function populateBiodata(source){
  return Object.assign(biodata, source);
}

function updateField(field, value){
  this[field] = value;
}