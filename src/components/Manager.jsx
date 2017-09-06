import React from "react";
import { Redirect } from 'react-router-dom';

class Manager extends React.Component {
    render() {
        console.log("LOGGED IN: " + this.props.loggedIn);
        if(this.props.loggedIn){
            return (
                <div className="container">
                    {this.props.children}
                </div>
            );
        }
        else {
            return <Redirect to="/" />
        }
    }
};
export default Manager;