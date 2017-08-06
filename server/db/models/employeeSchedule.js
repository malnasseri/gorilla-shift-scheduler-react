const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeScheduleSchema = new Schema({
  emp_id: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  monday: {
    type: String,
    default: ""
  },
  tuesday: {
    type: String,
    default: ""
  },
  wednesday: {
    type: String,
    default: ""
  },
  thursday: {
    type: String,
    default: ""
  },
  friday: {
    type: String,
    default: ""
  },
  saturday:{
    type: String,
    default: ""
  },
  sunday: {
    type: String,
    default: ""
  },
  active: {
    type: Number,
    default: 1,
  }
});

const EmployeeSchedule = mongoose.model('EmployeeSchedule', EmployeeScheduleSchema);
module.exports = EmployeeSchedule;