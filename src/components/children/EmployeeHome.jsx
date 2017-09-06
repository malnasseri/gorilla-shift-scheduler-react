import React from "react";
import helpers from "../utils/helpers";
import ScheduleView from "./ScheduleView";
import EmployeeAnnouncementsView from "./EmployeeAnnouncementsView";

class EmployeeHome extends React.Component {
     constructor(props){
        super(props);
        this.state = {
          email: "",
          picture: ""
        }
    }
    componentDidMount = () => {
        this.getAnnouncements();
    };
    getAnnouncements() {
        helpers.getAnnouncements().then((response) => {
          if(response.data.length > 0){
            this.setState({
              title: response.data[response.data.length -1].title,
              content: response.data[response.data.length -1].content
            });
          }
        });
    };
    render() { 
        return (
            <div>
              <div className="row">
                <div className="col s12">
                     <h2 className="emp-h2"> Employee Dashboard</h2>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                <EmployeeAnnouncementsView title={this.state.title} content={this.state.content}/>
                </div>
              </div>
              <div className="col s12">
                <ScheduleView />
              </div>
            </div>
        );
    }
};
export default EmployeeHome;
