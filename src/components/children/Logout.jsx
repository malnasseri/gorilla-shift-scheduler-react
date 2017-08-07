import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Logout extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			redirectTo: null
		}
		
    	this.handleLogout = this.handleLogout.bind(this);
	}

	handleUserChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleLogout(event) {
		event.preventDefault()
		console.log('handleLogout')
		this.props._logout(this.state.email, this.state.password, this.state.userType);
		this.setState({
			redirectTo: '/login'
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
                                <h4 className="text-darken-1">You logged out</h4>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
         </div>
	)
		}
	}
}

export default Logout




