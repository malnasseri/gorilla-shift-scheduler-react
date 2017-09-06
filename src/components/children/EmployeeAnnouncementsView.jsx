import React from "react";

class EmployeeAnnouncementsView extends React.Component {
    render() {
        return (
            <div className="card-panel emp-announcement">
                <div className="row">
                    <div className="col s12">
                        <h5>Latest announcement</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <h5>{this.props.title}</h5>
                        <p>{this.props.content}</p>
                    </div>
                </div>
            </div>
        );
    }
};
export default EmployeeAnnouncementsView;