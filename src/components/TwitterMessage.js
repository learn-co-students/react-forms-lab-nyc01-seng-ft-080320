import React from "react";

class TwitterMessage extends React.Component {
 

  state={
    message:'',
    remaining: this.props.maxChars
  }
 
  inputReader = (e) => {
  
    
    this.setState({
      message: e.target.value,
      remaining: (this.state.remaining)-1
    })
    
  }


  render() {
    return ( 
    <div>
      <strong> Your message: </strong>
      <input type = "text" name = "message" id = "message"
      value = {
        this.state.input
      }
      onChange = {
        this.inputReader
      }
      /> 
      <p>You have {this.state.remaining} left </p>
      </div>

    );
    }
  
}

export default TwitterMessage;
