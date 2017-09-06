import React from "react";
import helpers from "../utils/helpers";
import ScheduleView from "./ScheduleView";
import AnnouncementsBuild from "./AnnouncementsBuild";
import AnnouncementsView from "./AnnouncementsView";
import { Link } from "react-router-dom";

class ManagerHome extends React.Component {
     constructor(props){
        super(props);
        this.state = {
          title: "",
          content: ""
        }
    }
    componentDidMount = () => {
        this.getAnnouncements();
    }
    getAnnouncements = () => {
        helpers.getAnnouncements().then((response) => {
            if(response.data.length > 0){
              this.setState({
                title: response.data[response.data.length -1].title,
                content: response.data[response.data.length -1].content
              });
            }
        });
    };
    updateAnnouncement = (title, content) => {
        this.setState({
            title: title,
            content: content
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <ul className="left manager-btns">
                         <li> <Link to="/ManagerHome/employeeAll" className="btn waves-effect waves-light blue lighten-3 black-text loginButtons">
                            Employee Management<i className="material-icons right">group</i>
                         </Link></li>
                        <li> <Link to="ManagerHome/schedulesCreate" className="btn waves-effect waves-light blue lighten-3 black-text loginButtons">
                            Schedules<i className="material-icons right">access_time</i>
                        </Link></li>
                    </ul>
                    <h3 id="manager-h3"> Manager Dashboard</h3>
                 </div>
                <ScheduleView />
                <div className="row">     
                    <div className="col m6" id="manager-an-view">
                        <AnnouncementsView title={this.state.title} content={this.state.content}/>
                    </div>
                    <div className="col m6" id="manager-add-an">
                        <AnnouncementsBuild updateAnnouncement={this.updateAnnouncement} />
                    </div>
                </div>
            </div>
        );
    }
};
export default ManagerHome;
