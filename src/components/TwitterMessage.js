import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweetContent: "", 
    };
  }

  updateTweetContent = (event) => {
    this.setState({
      tweetContent: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.updateTweetContent(event)} type="text" name="message" id="message" value={this.state.tweetContent} />
        <p>Remaining Characters: {this.props.maxChars - this.state.tweetContent.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
