import React from "react";

class LoginForm extends React.Component {

  render() {
    return (
      <form onChange={this.props.handleLogin}>
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text"
              values = {this.props.username} 
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              name="password" 
              type="password" 
              values = {this.props.password} 
            />
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
