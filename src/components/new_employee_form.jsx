import React from 'react';
import HobbyIndex from './hobby_index'

class EmployeeInfoForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: this.props.firstName + this.props.lastName,
      street: this.props.street,
      city: this.props.city,
      state: this.props.state,
      zip: this.props.zip,
      hobbies: ["Pure", "Fucking", "Magic"]
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.setHobbies = this.setHobbies.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  setHobbies(hobbies){
    this.setState({hobbies: hobbies})
  }

  handleSave(e){
    e.preventDefault();
    //Make a POST request to cts/employees
  }

  handleDelete(e){
    e.preventDefault();
   //Gray out if no empId exists
   //Do the delete if it does exist
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
            <HobbyIndex hobbies={this.state.hobbies} setHobbies={this.setHobbies}/>
          </div>
          <button className="delete-btn" onClick={this.handleDelete}>Delete Employee</button>
          <button className="save-btn" onClick={this.handleSave}>Create Employee</button>
        </form>
      </div>
    )
  }
}

export default EmployeeInfoForm;