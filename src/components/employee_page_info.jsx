import React from 'react';
import HobbyIndex from './hobby_index'

class EmployeePageInfo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      hobbies: this.props.hobbies
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(e){
    e.preventDefault();
    //link back to the new employee form
  }

  handleDelete(e){
    e.preventDefault();
   //Make a DELETE request to cts/employee?empId=$empId
   //Return a "Request completed" on OK, and display the new employee form
  }

  render(){
    return(
      <div className="emp-info">
        <label className="emp-label">Employee Name:</label><span className="emp-info">{this.props.firstName} {this.props.lastName}</span>
        <label className="emp-label">Address:</label>
        <label className="emp-label">Street:</label><span className="emp-info">{this.props.address.street}</span>
        <label className="emp-label">City:</label><span className="emp-info">{this.props.address.city}</span>
        <label className="emp-label">State:</label><span className="emp-info">{this.props.address.state}</span>
        <label className="emp-label">Zip:</label><span className="emp-info">{this.props.address.zip}</span>
        <div className="hobby-box">
          <HobbyIndex hobbies={this.props.hobbies}/>
        </div>
        <button className="delete-btn" onClick={this.handleDelete}>Delete Employee</button>
        <button className="save-btn" onClick={this.handleSave}>Create Employee</button>
      </div>
    )
  }
}