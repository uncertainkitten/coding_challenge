import React from 'react';
import {withRouter}from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {username: "", password: ""}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault()
    sessionStorage.setItem("username", this.state.username)
    this.props.history.push("/employee")
  }

  render() {
    return (
      <div className="login-page">
        <div className="login-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="username-box">
              <h3 className="auth-label">User Name : </h3>
              <input type="text" value={this.state.username} onChange={this.update("username")} className="login-input" />
            </div>
            <div className="password-box">
              <h3 className="auth-label">Password : </h3>
              <input type="password" value={this.state.password} onChange={this.update("password")} className="login-input" />
            </div>
              <input className="login-submit" type="submit" value="Log in" />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);