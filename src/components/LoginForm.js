import React from "react";

class LoginForm extends React.Component {

  
 state={
   username:'',
   password:''   
 }

 clickHandler = (e) =>{
 
  this.setState({[e.target.name]:[e.target.value]})
  console.log(e.target.name, e.target.value)
 }

 submitHandler =(e) =>{
  e.preventDefault()
  console.log(e)

  if (!this.state.username || !this.state.password) return

  this.props.handleLogin(this.state)
 }


  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.clickHandler}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.clickHandler}/>
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
