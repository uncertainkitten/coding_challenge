import React from 'react';

class EmployeeIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: localStorage.getItem("username"),
      employeeId: ""}
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    // make a get request to cts/employee
  }

  render(){
    return(
      <div className="employee-index">
        <h3 className="greeting">Hi, {this.state.username}</h3>
        <button className="logout-btn">Logout</button>
        <form className="search-form" onSubmit={this.handleSubmit} >
          <label>Employee ID</label>
          <input type="text" value={this.state.employeeId} onChange={this.update("employeeId")} className="search-input" placeholder="ex. Emp1" />
          <input className="search-btn" type="submit"  value="Find" />
        </form>
      </div>
    )
  }
}