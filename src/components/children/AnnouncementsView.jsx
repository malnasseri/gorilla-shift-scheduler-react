import React from "react";

class AnnouncementsView extends React.Component {
    render() {
        return (
            <div className="card-panel announcement">
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
export default AnnouncementsView;