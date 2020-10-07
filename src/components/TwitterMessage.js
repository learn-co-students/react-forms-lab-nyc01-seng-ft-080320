import React from "react";

class TwitterMessage extends React.Component {
    state = {
      message: 'Enter tweet..',
      charsLeft: 267
    }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
      charsLeft: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={(event) => this.handleChange(event)}
        />
        <p>{this.state.charsLeft} chars left..</p>
      </div>
    );
  }
}

export default TwitterMessage;
