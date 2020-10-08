import React, { Component } from 'react'
import LoginForm from "./components/LoginForm";
import TwitterMessage from "./containers/TwitterMessage";

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      maxChars: 280,
      charCount: 280,
      message: "",
      username: '',
      password: '',
    };
  }
  
  login = ({ username, password }) => {
    console.log(`Logging in ${username} with password ${password}`);
  };

  handleLogin = (event) => {
    // console.log(event.target.name)
    
    this.setState({
      [event.target.name]: event.target.value
    })
    this.login(this.state)
    event.preventDefault()
  }
  
  handleMessageChange = (event) => {
    let charCount = this.state.maxChars - event.target.value.length

    charCount > -1 ?
      this.setState({
        [event.target.name]: event.target.value,
        charCount,
      }):this.setState({})

      console.log(this.state.charCount)
  }

  render() {
    return (
      <div>
        <h1>
          <pre>LoginForm</pre>
        </h1>
        <LoginForm 
          handleLogin={this.handleLogin} 
          username={this.state.username}
          password={this.state.password}
          
        />

        <h1>
          <pre>TwitterMessage</pre>
        </h1>
        <TwitterMessage 
          message={this.state.message}
          charCount={this.state.charCount} 
          handleMessageChange={this.handleMessageChange}
        />
      </div>
    )
  }
}

export default App
