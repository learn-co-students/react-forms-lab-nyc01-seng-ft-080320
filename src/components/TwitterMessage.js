import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
        message: '',
    };
  }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        //count how many chars in message, and subtract from this.props.maxChars
    }
    remainingChars = () => {
        return this.props.maxChars - this.state.message.length
    }

  render() {
    return (
        <div>
            <div>
                <strong>Your message:</strong>
                <input type="text" name="message" id="message" value={this.state.message} onChange={ e => {this.changeHandler(e)}}/>
            </div>
            <div>Remaining Characters: {this.remainingChars()} </div>
      </div>    
    );
  }
}

export default TwitterMessage;
