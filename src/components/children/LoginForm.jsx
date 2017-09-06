import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

class LoginForm extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			redirectTo: null
		}
		this.handleUserChange = this.handleUserChange.bind(this);
    	this.handleLogin = this.handleLogin.bind(this);
	}
	handleUserChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleLogin(event) {
		event.preventDefault()
		// console.log('handleSubmit')
		this.props._login(this.state.email, this.state.password, this.state.userType);
        console.log(this.props.loggedIn)
		this.setState({
			redirectTo: '/'
		}) 
	}
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				 <div className="container">
                    <div className="row">
                        <div className="col m6 offset-m3 s12">
                            <div className="card-panel" id="loginForm">
                                <div className="row" id="login-header">
                                    <div className="col s12 center">
                                        <h4 className="text-darken-1">Login</h4>
                                    </div>
                                </div>
                                <form action="/login" method="POST" onSubmit={this.handleLogin}>
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
                                        <button className="btn waves-effect   blue lighten-3 black-text loginButtons" type="submit" value="Submit" name="action">Login<i className="material-icons right">send</i></button>
                                    </div>
                                </div>
                                <div className="divider">
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <h6 id="noAccount">Or Signup </h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <Link to="/signup" id="signup-btn" className="btn waves-effect waves-light  blue lighten-3 black-text signupButtons" href="/signup">Signup<i className="material-icons right">person_add</i>
                                        </Link>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
			)
		}
	}
}
export default LoginForm
