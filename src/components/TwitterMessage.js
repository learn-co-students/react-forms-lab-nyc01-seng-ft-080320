import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ""
    };
  }

  renderCount = (e) => {
    // let newCount = this.state.count -= 1
    // console.log
    this.setState({text: e.target.value})
  } 

  render() {
    let count = this.props.maxChars - this.state.text.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.renderCount} name="message" id="message" value={this.state.text}/>
        <span>{count}</span>
      </div>
    );
  }
}

export default TwitterMessage;
