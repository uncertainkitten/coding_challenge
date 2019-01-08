import React from 'react';
import EmployeeInfoForm from './new_employee_form';
import {Link} from 'react-router-dom';

class EmployeeIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: sessionStorage.getItem("username"),
      employeeId: "",
      payload: false,
      error: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getEmployee = this.getEmployee.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.getEmployee(this.state.employeeId);
  }

  getEmployee(empId){
    this.setState({employeeId: empId});
    fetch(`http://104.248.219.208:8080/cts/employee?empId=${empId}`)
      .then(res => res.json())
      .then(payload => this.setState({payload, error: false}))
      .catch(error => this.setState({error: true}))
  }

  clearForm(){
    this.setState({
      employeeId: "",
      payload: false,
      error: false
    });
  }

  render(){
    let component = <EmployeeInfoForm
        firstName=""
        lastName=""
        address={{zip: 0, state: "", city: "", street: ""}}
        hobbies={[]}
        getEmployee={this.getEmployee}/>;

    if (!!this.state.payload){
      component = <EmployeeInfoForm
      firstName={this.state.payload.firstName}
      lastName={this.state.payload.lastName}
      address={this.state.payload.address}
      hobbies={this.state.payload.hobbies}
      getEmployee={this.getEmployee}
      empId={this.state.employeeId}
      clearForm={this.clearForm}/>;
    }

    let error = "";
    if (this.state.error){
      error = <div>We couldn't process that search - did you put in the right employee ID?</div>
    }
    return(
      <div className="employee-index">
        <div className="top-right">
          <h3 className="greeting">Hi, {this.state.username}</h3>
          <Link to="/" className="logout-btn">Logout</Link>
        </div>
        <form className="search-form" onSubmit={this.handleSubmit} >
          <label className="emp-label">Employee ID</label>
          <input type="text" value={this.state.employeeId} onChange={this.update("employeeId")} className="search-input" placeholder="ex. Emp1" />
          <input className="search-btn" type="submit"  value="Find" />
        </form>
        {component}
        {error}
      </div>
    )
  }
}

export default EmployeeIndex;