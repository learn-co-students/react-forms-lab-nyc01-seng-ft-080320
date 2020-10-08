import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charCount: 0,
      message: "",
    };
  }

  handleCharCount = (event) => {
    let currentCount = event.target.value.length
    let currentMessage = event.target.value
    
    currentCount+1 >= this.props.maxChars ? this.setState({}) : this.setState({
      charCount:event.target.value.length,
      message: currentMessage
    })
    console.log(this.state)
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
