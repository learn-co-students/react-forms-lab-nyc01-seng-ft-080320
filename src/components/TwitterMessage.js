import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      message: "",
      maxChars: props.maxChars,
      remaining: props.maxChars,
    };
  }
  messageChangeHandler = e => {
    this.setState({
      message: e.target.value,
      remaining: this.state.maxChars - e.target.value.length,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" maxLength={this.state.maxChars} onChange={this.messageChangeHandler} value={this.state.message}/>
        <span>{this.state.remaining}</span>
      </div>
    );
  }
}

export default TwitterMessage;
