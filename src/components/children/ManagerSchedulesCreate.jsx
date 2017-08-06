import React from "react";
import helpers from "../utils/helpers";

class ManagerSchedulesCreate extends React.Component {
   constructor(props){
        super(props);
        this.state = {
        firstName:"",
        lastName:"",
        monday:"",
        tuesday:"",
        wednesday:"",
        thursday:"",
        friday:"",
        saturday:"",
        sunday:"",
        selectedEmpId:"",
        selectedEmpSchedule:"",
        empSchedules: [],
      };
    };

    componentDidMount() {
        helpers.getEmpSchedules().then((response) => {
          if (response !== this.state.empSchedules) {
            this.setState({ empSchedules: response.data });
          }
        });
    };

    handleUserChange = (index, event) => {
        const updatedEmpSchedules = this.state.empSchedules.map((empSchedule, j) => {
            if(index === j){
                //index is the index of the currently selected employee
                empSchedule[event.target.name] = event.target.value;
                this.setState({selectedEmpSchedule: empSchedule});
                this.setState({ selectedEmpId: empSchedule._id });
            }
            return empSchedule;
        });
        this.setState({ empSchedules: updatedEmpSchedules});
    };

    handleUpdateEmpSchedule = (event) => {
        const saveButtonBlue = document.getElementById(event);
        saveButtonBlue.innerHTML = "Add";
        saveButtonBlue.className = "btn btn-small waves-effect waves-light green accent-3";

        if (this.state.selectedEmpSchedule !== "") {
            helpers.updateEmpSchedule(this.state.selectedEmpSchedule).then((response) => {
                const empName = this.state.selectedEmpSchedule.firstName + " " + this.state.selectedEmpSchedule.lastName + "'s ";
                // Materialize.toast(empName + "schedule updated", 2000);
                this.clearStates();
            });
        }
    };

    handleClearEmpSchedule(i, event) {
        // i is the index of the currently selected employee
        event.preventDefault();
        const updatedEmpSchedules = this.state.empSchedules.map((empSchedule, j) => {
            if(i === j){
                const saveButton = document.getElementById(i);
                saveButton.innerHTML = "save";
                saveButton.className = "btn btn-small waves-effect waves-light blue accent-3";

                empSchedule.monday = "";
                empSchedule.tuesday = "";
                empSchedule.wednesday = "";
                empSchedule.thursday = "";
                empSchedule.friday = "";
                empSchedule.saturday = "";
                empSchedule.sunday = "";
                this.state.selectedEmpSchedule = empSchedule;
            }
            return empSchedule;
        });
        this.setState({ empSchedules: updatedEmpSchedules});
    };

    clearStates() {
        this.setState({ firstName: "", lastName: "", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "", saturday: "", sunday: "", emp_id: "", selectedEmpSchedule: "", selectedEmpId: ""});
    };
    render() {
        return (
            
                <div className="row">
                    <a id="home" className="btn waves-effect waves-light blue lighten-3 black-text loginButtons" href="/ManagerHome">Dashboard<i className="material-icons right">dashboard</i></a>
                    <div className="col m12" id="schedule-build">
                        <div className="section">
                            <h5>Schedule Editor</h5>
                            <table>
                                <thead>
                                    <tr>
                                        <th data-field="name">&#160;&#160;Name</th>
                                        <th data-field="name">&#160;&#160;&#160;Mon</th>
                                        <th data-field="name">&#160;&#160;&#160;Tues</th>
                                        <th data-field="name">&#160;&#160;Wed</th>
                                        <th data-field="name">&#160;&#160;&#160;Thurs</th>
                                        <th data-field="name">&#160;&#160;&#160;&#160;Fri</th>
                                        <th data-field="name">&#160;&#160;&#160;Sat</th>
                                        <th data-field="name">&#160;&#160;&#160;Sun</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.empSchedules.map((schedules, i) => {
                                        return (
                                            <tr className="table-row" key={i}>
                                                <td className="fullName" id={this.state.empSchedules[i]._id}>
                                                {schedules.firstName} {schedules.lastName}
                                                </td>
                                                <td className="">
                                                    <div className="input-field schedule">
                                                        <select className="browser-default" name="monday" value={schedules.monday} onChange={this.handleUserChange.bind(this, i)}>
                                                        <option value=""></option>
                                                        <option value="OFF">OFF</option>
                                                        <option value="8am-5pm">8am-5pm</option>
                                                        <option value="9am-6pm">9am-6pm</option>
                                                        <option value="10am-7pm">10am-7pm</option>
                                                        <option value="11am-8pm">11am-8pm</option>
                                                        <option value="12pm-9pm">12pm-9pm</option>
                                                        <option value="1pm-10pm">1pm-10pm</option>
                                                        <option value="2pm-11pm">2pm-11pm</option>
                                                        <option value="3pm-12am">3pm-12am</option>
                                                    </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-field schedule">
                                                        <select className="browser-default" name="tuesday" value={schedules.tuesday} onChange={this.handleUserChange.bind(this, i)}>
                                                        <option value=""></option>
                                                        <option value="OFF">OFF</option>
                                                        <option value="8am-5pm">8am-5pm</option>
                                                        <option value="9am-6pm">9am-6pm</option>
                                                        <option value="10am-7pm">10am-7pm</option>
                                                        <option value="11am-8pm">11am-8pm</option>
                                                        <option value="12pm-9pm">12pm-9pm</option>
                                                        <option value="1pm-10pm">1pm-10pm</option>
                                                        <option value="2pm-11pm">2pm-11pm</option>
                                                        <option value="3pm-12am">3pm-12am</option>
                                                    </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-field schedule">
                                                        <select className="browser-default" name="wednesday" value={schedules.wednesday} onChange={this.handleUserChange.bind(this, i)}>
                                                        <option value=""></option>
                                                        <option value="OFF">OFF</option>
                                                        <option value="8am-5pm">8am-5pm</option>
                                                        <option value="9am-6pm">9am-6pm</option>
                                                        <option value="10am-7pm">10am-7pm</option>
                                                        <option value="11am-8pm">11am-8pm</option>
                                                        <option value="12pm-9pm">12pm-9pm</option>
                                                        <option value="1pm-10pm">1pm-10pm</option>
                                                        <option value="2pm-11pm">2pm-11pm</option>
                                                        <option value="3pm-12am">3pm-12am</option>
                                                    </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-field schedule">
                                                        <select className="browser-default" name="thursday" value={schedules.thursday} onChange={this.handleUserChange.bind(this, i)}>
                                                        <option value=""></option>
                                                        <option value="OFF">OFF</option>
                                                        <option value="8am-5pm">8am-5pm</option>
                                                        <option value="9am-6pm">9am-6pm</option>
                                                        <option value="10am-7pm">10am-7pm</option>
                                                        <option value="11am-8pm">11am-8pm</option>
                                                        <option value="12pm-9pm">12pm-9pm</option>
                                                        <option value="1pm-10pm">1pm-10pm</option>
                                                        <option value="2pm-11pm">2pm-11pm</option>
                                                        <option value="3pm-12am">3pm-12am</option>
                                                    </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-field schedule">
                                                        <select className="browser-default" name="friday" value={schedules.friday} onChange={this.handleUserChange.bind(this, i)}>
                                                        <option value=""></option>
                                                        <option value="OFF">OFF</option>
                                                        <option value="8am-5pm">8am-5pm</option>
                                                        <option value="9am-6pm">9am-6pm</option>
                                                        <option value="10am-7pm">10am-7pm</option>
                                                        <option value="11am-8pm">11am-8pm</option>
                                                        <option value="12pm-9pm">12pm-9pm</option>
                                                        <option value="1pm-10pm">1pm-10pm</option>
                                                        <option value="2pm-11pm">2pm-11pm</option>
                                                        <option value="3pm-12am">3pm-12am</option>
                                                    </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-field schedule">
                                                        <select className="browser-default" name="saturday" value={schedules.saturday} onChange={this.handleUserChange.bind(this, i)}>
                                                        <option value=""></option>
                                                        <option value="OFF">OFF</option>
                                                        <option value="8am-5pm">8am-5pm</option>
                                                        <option value="9am-6pm">9am-6pm</option>
                                                        <option value="10am-7pm">10am-7pm</option>
                                                        <option value="11am-8pm">11am-8pm</option>
                                                        <option value="12pm-9pm">12pm-9pm</option>
                                                        <option value="1pm-10pm">1pm-10pm</option>
                                                        <option value="2pm-11pm">2pm-11pm</option>
                                                        <option value="3pm-12am">3pm-12am</option>
                                                    </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-field schedule">
                                                        <select className="browser-default" name="sunday" value={schedules.sunday} onChange={this.handleUserChange.bind(this, i)}>
                                                        <option value=""></option>
                                                        <option value="OFF">OFF</option>
                                                        <option value="8am-5pm">8am-5pm</option>
                                                        <option value="9am-6pm">9am-6pm</option>
                                                        <option value="10am-7pm">10am-7pm</option>
                                                        <option value="11am-8pm">11am-8pm</option>
                                                        <option value="12pm-9pm">12pm-9pm</option>
                                                        <option value="1pm-10pm">1pm-10pm</option>
                                                        <option value="2pm-11pm">2pm-11pm</option>
                                                        <option value="3pm-12am">3pm-12am</option>
                                                    </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <button id={i} className="addScheduleBtn" onClick={this.handleUpdateEmpSchedule.bind(this, i)} className="btn btn-small waves-effect waves-light green accent-3">Add</button>
                                                </td>
                                                <td>
                                                    <button id={i} className="clearSchedule" onClick={this.handleClearEmpSchedule.bind(this, i)} className="btn btn-small waves-effect waves-light green accent-3">Clear</button>
                                                </td>
                                            </tr>
                                        );
                                    }, this)}
                                </tbody>
                            </table>
                          </div>
                        </div>
                    </div>
        );
    }
};

export default ManagerSchedulesCreate;
