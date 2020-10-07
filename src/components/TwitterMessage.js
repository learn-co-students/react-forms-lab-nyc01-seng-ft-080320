import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }


  render() {
    let charRemaining = this.props.maxChars - this.state.message.length;
    return (
      <div>
          <strong>Your message:</strong>
        <input onChange={event => this.handleMessageChange(event)} type="text" name="message" id="message" value={this.state.message}/>
        {charRemaining}
      </div>
    );
  }
}

export default TwitterMessage;
