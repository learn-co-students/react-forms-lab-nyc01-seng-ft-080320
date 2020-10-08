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
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        if (this.state.username.length > 0 && this.state.password.length > 0){
            this.props.handleLogin(this.state)
        } else {
            window.alert("Please enter a username and password")
        }
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>
                    Username
                    <input 
                        id="username" 
                        name="username" 
                        type="text" 
                        value={this.state.username}
                        onChange={this.changeHandler}
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
                        value={this.state.password}
                        onChange={this.changeHandler}
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
