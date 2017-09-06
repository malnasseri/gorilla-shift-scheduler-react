import React from "react";
import { Redirect, Link } from 'react-router-dom';

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
		return(
			<div className="row">
			<div className="section no-pad-bot" id="index-banner">
    <div className="container">
      <br></br>
      <h1 className="header center orange-text">Gorilla Shift Scheduler</h1>
      <div className="row center">
        <h5 className="header col s12 light">Managing employees just got easier!</h5>
      </div>
      <div className="row center">
	      <Link to="/signup" id="signup-btn" className="btn-large waves-effect waves-light orange">
	      		Get Started
				</Link>
      </div>
      <br></br>
    </div>
  </div>
  <div className="container">
    <div className="section">
      <div className="row">
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i className="material-icons home">flash_on</i></h2>
            <h5 className="center">Quick Scheduling</h5>
            <p className="light"> an easy-to-use online employee management app. Keep track of each employee’s schedule. </p>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i className="material-icons home">group</i></h2>
            <h5 className="center">Real time Updating</h5>
            <p className="light">Managers can Add, Remove or Update Employees, And thier schedules, Also Managers can Add An Announcement to all employees, The app automatically updates changes in real time.</p>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i className="material-icons home">settings</i></h2>
            <h5 className="center">Easy to work with</h5>
            <p className="light">With the Gorilla Sheduler app, Managers can quickly see who’s working,  Who’s scheduled and who’s available. </p>
          </div>
        </div>
      </div>
    </div>
    <br></br>
  </div>
<footer className="page-footer orange">
	<div className="container">
		<div className="row">
			<div className="col s12">
				<h5 id="connect" className="white-text">Connect</h5>
				<ul>
					<a  href="https://github.com/malnasseri" className="waves-effect waves-light btn grey darken-2 social github">
						<i className="fa fa-github"></i> github
					</a>
				</ul>
			</div>
			<div className="col s12">
				<ul>
					<a  href="https://www.linkedin.com/in/mohammed-alnasseri-23a84913b" className="waves-effect waves-light btn blue darken-2 social linkedin">
						<i className="fa fa-linkedin"></i> linkedin
					</a>
				</ul>
			</div>
		</div>
	</div>
	<div className="footer-copyright">
		<div className="container">
			<div className="col  s12 black-text madeBy">
				<img alt="gorilla" id="img" src="./assets/images/gorilla.ico"></img>
				Made by <a className="black-text text-lighten-4" >M.Alnasseri</a>
			</div>
		</div>
	</div>
</footer>
  </div>
		);
  }
}
export default Main;
