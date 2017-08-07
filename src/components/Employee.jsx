import React from "react";
import { Redirect } from 'react-router-dom';
import helpers from "./utils/helpers";

class Employee extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          email: "",
          picture: ""
        }
    }
    componentDidMount = () => {
       helpers.getCurrentUser().then((response) => {
          if (response !== this.state.email) {
            this.setState({ picture: response.data.picture, email: response.data.email });
          }
        });
   }
    render() {
       if(this.props.loggedIn){
         return (
                <div className="container">
                    {this.props.children}
                </div>
        );
        } 
        else{
          return <Redirect to="/" />
        }
    }
}
export default Employee;
