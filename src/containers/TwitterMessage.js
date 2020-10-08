import React from "react";

import MessageBox from '../components/MessageBox.js'
import CharCount from "../components/CharCount.js";

class TwitterMessage extends React.Component {

  render() {
    return (
      <div>
        <MessageBox 
          handleMessageChange={this.props.handleMessageChange} 
          message={this.props.message}
        />
        <CharCount 
          charCount={this.props.charCount}
          
        />
        
      </div>
    );
  }
}

export default TwitterMessage;
