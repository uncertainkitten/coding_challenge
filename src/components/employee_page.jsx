import React from 'react';
import EmployeeInfoForm from './new_employee_form';

class EmployeeIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: localStorage.getItem("username"),
      employeeId: "",
      payload: false,
      error: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getEmployee = this.getEmployee.bind(this);
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
      getEmployee={this.getEmployee}/>;
    }

    let error = "";
    if (this.state.error){
      error = <div>Something went wrong!</div>
    }
    return(
      <div className="employee-index">
        <h3 className="greeting">Hi, {this.state.username}</h3>
        <button className="logout-btn">Logout</button>
        <form className="search-form" onSubmit={this.handleSubmit} >
          <label>Employee ID</label>
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