import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
    
  }
  submitHandler = (e) => {
    e.preventDefault()
    if (!Object.values(this.state).some((ele) => ele === "")){
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.changeHandler}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.changeHandler}/>
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
