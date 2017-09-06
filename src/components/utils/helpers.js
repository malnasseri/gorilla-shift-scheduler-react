import axios from "axios";

const helper = {
  getAllEmployees() {
    return axios.get("/getAllEmployees");
  },
  getCurrentUser() {
    return axios.get("/user");
  },
  getEmployee(id) {
    return axios.get("/getEmployee/" + id);
  },
  getEmpSchedules() {
    return axios.get('/getEmpSchedules')
    .then((response) => {
        return response;
    })
  },
  addEmpSchedule(emp_id, firstName, lastName) {
    return axios.post('/addEmpSchedule', {
      emp_id: emp_id,
      firstName: firstName,
      lastName: lastName
    });
  },
  updateEmpSchedule(empSchedule) {
    return axios.put('/updateSchedule/' + empSchedule._id, {
      employeeSchedule: empSchedule
    });
  },
  addEmployee(firstName, lastName, addressOne, addressTwo, city, state, zip, email, phone, phoneType) {
    return axios.post("/addEmployee", {
        firstName: firstName,
        lastName: lastName,
        addressOne: addressOne,
        addressTwo: addressTwo,
        city: city,
        state: state,
        zip: zip,
        email: email,
        phone: phone,
        phoneType: phoneType });
  },
  updateEmployee(id, firstName, lastName, addressOne, addressTwo, city, state, zip, email, phone, phoneType) {
       return axios.put("/updateEmployee/" + id, {
           firstName: firstName,
           lastName: lastName,
           addressOne: addressOne,
           addressTwo: addressTwo,
           city: city,
           state: state,
           zip: zip,
           email: email,
           phone: phone,
           phoneType: phoneType
       });
  },
  updateEmpName(emp_id, firstName, lastName)  {
    return axios.put("/updateEmpName/" + emp_id, {
        firstName: firstName,
        lastName: lastName
       });
  },
  removeEmployee(id) {
    return axios.put("/removeEmployee/" + id);
  },
  removeEmpSchedule(emp_id) {
    return axios.put("/removeEmpSchedule/" + emp_id);
  },
  getAnnouncements() {
    return axios.get("/getAnnouncements");
  },
  addAnnouncements(title, content) {
    return axios.post("/addAnnouncements", {
        title: title,
        content: content });
  },
}
export default helper;
