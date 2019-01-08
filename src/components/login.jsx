import React from 'react';

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
    localStorage.setItem("username", this.state.username)
  }

  render() {
    return (
      <div>
        <div className="login-page">
          <div className="login-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <p className = "login-label">Login</p>
              <h3 className="auth-label">User Name</h3>
                  <input type="text" value={this.state.username} onChange={this.update("username")} className="login-input" />
              <h3 className="auth-label">Password</h3>
                  <input type="password" value={this.state.password} onChange={this.update("password")} className="login-input" />
              <div className="login-btn">Log In</div>
              <input className="signup-submit" type="submit" value="Log in" />
            </form>
        </div>
      </div>
    </div>
    );
  }
}

export default LoginForm;