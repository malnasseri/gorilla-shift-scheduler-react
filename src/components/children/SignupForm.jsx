import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			confirmPassword: '',
			userType: "",
			redirectTo: null
		}
		this.handleUserChange = this.handleUserChange.bind(this);
    	this.handleSignup = this.handleSignup.bind(this);
	}
	handleUserChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSignup(event) {
		event.preventDefault()
		axios.post('/auth/signup', {
			email: this.state.email,
			password: this.state.password,
			userType: this.state.userType
			})
			.then(response => {
				// console.log(response)
				if (!response.data.errmsg) {
					// console.log('youre good')
					this.setState({
						redirectTo: '/login'
					})
				} else {
					// console.log('duplicate')
				}
			});
	}
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
		  <div className="container">
             <div className="row">
                <div className="col m6 offset-m3">
                    <div className="card-panel" id="signup-form">
                        <div className="row" id="signup-header">
                            <div className="col s12 center">
                                <h4 className="text-darken-1">Signup</h4>
                                <h4> {this.state.error}</h4>
                            </div>
                        </div>
                        <form action="/register" method="POST" onSubmit={this.handleSignup}>
                           <div className="row">
                              <div className="col s12">
                                 <input
                                    placeholder="Email"
                                    type="email"
                                    className="validate"
                                    value={this.state.email}
                                    name="email"
                                    onChange={this.handleUserChange}
                                    required />
                              </div>
                           </div>
                           <div className="row">
                              <div className="col s12">
                                 <input
                                    placeholder="Password"
                                    type="password"
                                    className="validate"
                                    value={this.state.password}
                                    name="password"
                                    onChange={this.handleUserChange}
                                    required />
                               </div>
                            </div>
                            <div className="row">
                               <div className="col s12">
                                  <input
                                    placeholder="Confirm Password"
                                    type="password"
                                    className="validate"
                                    value={this.state.passwordConfirmation}
                                    name="passwordConfirmation"
                                    onChange={this.handleUserChange}
                                    required />
                               </div>
                            </div>
                            <div className="row">
                               <div className="col s12">
                                  <div className="input-field col m6 s6">
                                    <select className="browser-default validate" name="userType" value={this.state.usertype} onChange={this.handleUserChange} required>
                                       <option value="" disabled>usertype</option>
                                       <option value="manager">Manager</option>
                                       <option value="employee">Employee</option>
                                    </select>
                                  </div>
                               </div>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <button className="btn waves-effect waves-light blue lighten-3 black-text loginButtons" type="submit" value="Submit" name="action">Signup<i className="material-icons right">person_add</i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      );
	}
}
export default SignupForm
