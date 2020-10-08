import React from 'react'

export default class MessageBox extends React.Component {
    
    render() {
        return (
            <div>
                <strong>Your message:</strong>
                <input onChange={this.props.handleMessageChange}
                    type="text" 
                    name="message" 
                    id="message"
                    value = {this.props.message} 
                />
            </div>
        )
    }
}
