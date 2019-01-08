import React from 'react';
import HobbyIndex from './hobby_index'

class EmployeeInfoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      street: "",
      city: "",
      state: "",
      country: "USA",
      zip: 0,
      hobbies: [],
      empId: 0
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.setHobbies = this.setHobbies.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (this.props !== nextProps){
      this.setState({
        firstName: nextProps.firstName,
        lastName: nextProps.lastName,
        street: nextProps.address.street,
        city: nextProps.address.city,
        state: nextProps.address.state,
        zip: nextProps.address.zip,
        country: "USA",
        hobbies: nextProps.hobbies,
        empId: nextProps.empId,
        error: false,
        success: false,
        delSuccess: false
      });
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  setHobbies(hobbies){
    this.setState({hobbies: hobbies})
  }

  handleSave(e){
    e.preventDefault();
    let postData = {};
    let address = {};
    address.street = this.state.street;
    address.city = this.state.city;
    address.state = this.state.state;
    address.zip = this.state.zip;
    address.country = "USA";
    postData.firstName = this.state.firstName;
    postData.lastName = this.state.lastName;
    postData.address = address;
    postData.hobbies = this.state.hobbies
    fetch('http://104.248.219.208:8080/cts/employee', {
      method: 'post',
      body: JSON.stringify(postData),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(data => {
      this.setState({success: true});
      this.props.getEmployee(data.empId);
    })
    .catch(error => {
      this.setState({error: true});
    });
  }

  handleDelete(e){
    e.preventDefault();
    fetch(`http://104.248.219.208:8080/cts/employee?empId=${this.state.empId}`, {
      method: 'delete'
    })
    .then(res => res.json())
    .then(data => {this.setState({
      firstName: "",
      lastName: "",
      street: "",
      city: "",
      state: "",
      country: "USA",
      zip: 0,
      hobbies: [],
      empId: 0,
      error: false,
      delSuccess: true});
      this.props.clearForm();
    })
    .catch(error => {
      this.setState({error: true});
    });
  }

  render(){
    let successMessage = <div className="notify">New employee created successfully!</div>;
    if (!this.state.success){
      successMessage = <div></div>
    }

    if (this.state.delSuccess){
      successMessage = <div className="notify">Deleted employee successfully!</div>
    }
    let error = "";
    if (this.state.error){
      error = <div className="notify">We couldn't process that request - please check to make sure you entered the correct information.</div>
    }
    return(
      <div className="emp-info">
        <form className="emp-form">
          <div className="emp-box">
            <label className="emp-label">Employee First Name : </label>
            <input className="emp-input" type="text" value={this.state.firstName} onChange={this.update("firstName")}/>
          </div>
          <div className="emp-box">
            <label className="emp-label">Employee Last Name : </label>
            <input className="emp-input" type="text" value={this.state.lastName} onChange={this.update("lastName")}/>
          </div>
          <label className="emp-address-label">Address : </label>
          <div className="emp-address-box">
            <label className="emp-label">Street : </label>
            <input className="emp-address-input" type="text" value={this.state.street} onChange={this.update("street")}/>
          </div>
          <div className="emp-address-box">
            <label className="emp-label">City : </label>
            <input className="emp-address-input" type="text" value={this.state.city} onChange={this.update("city")}/>
          </div>
          <div className="emp-address-box">
            <label className="emp-label">State : </label>
            <input className="emp-address-input" type="text" value={this.state.state} onChange={this.update("state")}/>
          </div>
          <div className="emp-address-box">
            <label className="emp-label">Zip : </label>
            <input className="emp-address-input" type="text" value={this.state.zip} onChange={this.update("zip")}/>
          </div>
          <div className="hobby-box">
            <HobbyIndex hobbies={this.state.hobbies} setHobbies={this.setHobbies}/>
          </div>
          <div className="btn-box">
            <button className="emp-btn" onClick={this.handleDelete}>Delete Employee</button>
            <button className="emp-btn" onClick={this.handleSave}>Save Employee</button>
            {successMessage}
            {error}
          </div>
        </form>
      </div>
    )
  }
}

export default EmployeeInfoForm;