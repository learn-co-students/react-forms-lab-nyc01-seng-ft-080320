import React from "react";

class TwitterMessage extends React.Component {
  state = {
      message: "",
      counter: this.props.maxChars
    };
  
  handleChange = (event) => {
    this.setState(prev => ({message: event.target.value, counter: prev.counter - 1}))
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleChange(event)} name="message" id="message" value={this.state.message} />
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default TwitterMessage;
