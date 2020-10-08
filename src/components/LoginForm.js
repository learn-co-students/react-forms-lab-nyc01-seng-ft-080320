import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleLoginLocal = (e) => {
    e.preventDefault()
    if(this.state.username.length > 0 && this.state.password.length > 0) {
      this.props.handleLogin(this.state);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleLoginLocal}>
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text" 
              onChange={this.handleUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              name="password" 
              type="password" 
              onChange={this.handlePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
