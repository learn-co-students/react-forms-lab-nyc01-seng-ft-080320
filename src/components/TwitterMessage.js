import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      charCount: '',
      message: "",
    };

  }

  handleCharCount = (event) => {
    let currentCount = this.props.maxChars - event.target.value.length
    let currentMessage = event.target.value
    
    currentCount <= 0 ? 
      this.setState({
        charCount: currentCount,
      }) : this.setState({
        charCount: currentCount,
        message: currentMessage,
      })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleCharCount}
          type="text" 
          name="message" 
          id="message"
          value = {this.state.message} 
        />
        
      </div>
    );
  }
}

export default TwitterMessage;
