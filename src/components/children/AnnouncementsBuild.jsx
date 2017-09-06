import React from "react";
import helpers from "../utils/helpers";

class AnnouncementsBuild extends React.Component {
     constructor(props){
        super(props);
        this.state = {
          title: "",
          content: ""
        }
    }
    getAnnouncements(){
        helpers.getAnnouncements().then((response) => {
        });
    }
    handleAnnouncementBuild = (event) => {
        event.preventDefault();
        this.setState({
        [event.target.id]: event.target.value 
    });
    };
    addAnnouncements = (event) =>{
        event.preventDefault();
        helpers.addAnnouncements(this.state.title, this.state.content).then((response) => {
            this.props.updateAnnouncement(this.state.title, this.state.content);
            this.clearStates();
        });
        this.clearForm();
    };
    clearForm() {
        var elements = document.getElementsByTagName("input");
        for (var i=0; i < elements.length; i++) {
            elements[i].value = "";
            elements[i].classList.remove("valid");
        };
    };
    clearStates() {
        this.setState({ title: "", content: "" });
    };
    render() {
        return (
            <div className="card-panel" id="add-announcment">
                <div className="row">
                    <div className="col s12">
                        <h5>Make an announcement</h5>
                    </div>
                </div>
                <form onSubmit={this.addAnnouncements}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                placeholder="Title"
                                id="title"
                                type="text"
                                className="validate"
                                value={this.state.title}
                                onChange={this.handleAnnouncementBuild}
                                required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                placeholder="Announcement"
                                id="content"
                                type="text"
                                className="materialize-textarea"
                                value={this.state.content}
                                onChange={this.handleAnnouncementBuild}
                                required>
                            </input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className="btn waves-effect waves-light blue lighten-3 black-text loginButtons" type="submit" value="Submit" name="action">Submit<i className="material-icons right">add</i></button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
};
export default AnnouncementsBuild;
