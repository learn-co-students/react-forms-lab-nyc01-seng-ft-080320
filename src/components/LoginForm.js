import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
        username: "",
        password: ""
    };
  }

  handleChange = e => {
      //update values
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  localHandleLogin = e => {
      e.preventDefault()
      if(this.state.username !== "" && this.state.password !== ""){
        this.props.handleLogin(this.state)
      }
  }

  render() {

    return (
      <form onSubmit={this.localHandleLogin}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
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
