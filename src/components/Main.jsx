import React from "react";
import { Redirect } from 'react-router-dom';


class Main extends React.Component {
	constructor(){
		super();
		this.state = {
			userType: "",
			loggedIn: false
		};
	}
  render() {
  	if(this.props.loggedIn){
			if(this.props.userType) {
				if(this.props.userType === "manager") {
					return (
						<div>
							<Redirect to="/ManagerHome" />
						</div>
					)
				}
				else if(this.props.userType === "employee"){
					return (
						<div>
							<Redirect to="/EmployeeHome" />
						</div>
					)
				}
			}
		}
		return(<h1>MAIN PAGE</h1>);
  }
}

export default Main;