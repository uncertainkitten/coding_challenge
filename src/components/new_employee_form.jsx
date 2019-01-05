import React from 'react';
import HobbyIndex from './hobby_index'

class EmployeeInfoForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: this.props.firstName + this.props.lastName,
      street: this.props.address.street,
      city: this.props.address.city,
      state: this.props.address.state,
      zip: this.props.address.zip,
      hobbies: this.props.hobbies
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(e){
    e.preventDefault();
    //Make a POST request to cts/employees
  }

  handleDelete(e){
    e.preventDefault();
   //Gray out this button, send error saying no employee selected
  }

  render(){
    return(
      <div className="emp-info">
        <form className="emp-form">
          <label className="emp-label">Employee Name:</label>
          <input className="emp-input" type="text" value={this.state.name} onChange={this.update("name")}/>
          <label className="emp-label">Address:</label>
          <label className="emp-label">Street:</label>
          <input className="emp-info" type="text" value={this.state.street} onChange={this.update("street")}/>
          <label className="emp-label">City:</label>
          <input className="emp-info" type="text" value={this.state.city} onChange={this.update("city")}/>
          <label className="emp-label">State:</label>
          <input className="emp-info" type="text" value={this.state.state} onChange={this.update("state")}/>
          <label className="emp-label">Zip:</label>
          <input className="emp-info" type="text" value={this.state.zip} onChange={this.update("zip")}/>
          <div className="hobby-box">
            <HobbyIndex />
          </div>
          <button className="delete-btn" onClick={this.handleDelete}>Delete Employee</button>
          <button className="save-btn" onClick={this.handleSave}>Create Employee</button>
        </form>
      </div>
    )
  }
}