import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ""
    };
  }

  changeHandler = (e) => {
    console.log(e.target.value)
    this.setState({tweet: e.target.value})
  }

  render() {
    return (
      <div>
        <div>Characters left: {(this.props.maxChars - this.state.tweet.length)}</div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.changeHandler} value={this.state.tweet}/>
      </div>
    );
  }
}

export default TwitterMessage;
