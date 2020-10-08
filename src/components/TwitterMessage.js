import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  changeHandler = (e) => {
    this.setState({ message: e.target.value })
  }


  render() {
    let numChars = this.props.maxChars - this.state.message.length 

    console.log(this.numChars)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.changeHandler} value={this.state.message}/>
        {numChars}
      </div>
    );
  }
}

export default TwitterMessage;
