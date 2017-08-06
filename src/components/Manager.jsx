import React from "react";
import helpers from "./utils/helpers";
import { Route, Redirect } from 'react-router-dom';
import ManagerEmployeeAll from './children/ManagerEmployeeAll'

class Manager extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          email: "",
          picture: ""
        }
    }
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