import React from "react";
import helpers from "../utils/helpers";

class ScheduleView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
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
    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="section schedule">
                        <h5>Week at a glance</h5>
                        <table className="bordered">
                            <thead>
                                <tr>
                                    <th data-field="name">Name</th>
                                    <th data-field="name">&#160;&#160;Mon</th>
                                    <th data-field="name">Tues</th>
                                    <th data-field="name">&#160;&#160;Wed</th>
                                    <th data-field="name">&#160;Thurs</th>
                                    <th data-field="name">&#160;&#160;Fri</th>
                                    <th data-field="name">&#160;Sat</th>
                                    <th data-field="name">Sun</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.empSchedules.map((schedules, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="fullName">
                                            {schedules.firstName} {schedules.lastName}
                                        </td>
                                        <td className="schedule">
                                            {schedules.monday}
                                        </td>
                                        <td>
                                            {schedules.tuesday}
                                        </td>
                                        <td>
                                            {schedules.wednesday}
                                        </td>
                                        <td>
                                            {schedules.thursday}
                                        </td>
                                        <td>
                                            {schedules.friday}
                                        </td>
                                        <td>
                                            {schedules.saturday}
                                        </td>
                                        <td>
                                            {schedules.sunday}
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
export default ScheduleView;
