import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openTopic: null
    };
    this.generateTopics = this.generateTopics.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  generateTopics(topicsArray) {
    // ex: [ {topicName: 'HTML', topicText: 'HTML is the greatest thing ever made...'}, {topicName: 'CSS', ...}, ... ]
    return topicsArray.map(topic => {
      const hideTopic = (topic.topicName !== this.state.openTopic) ? 'hidden' : '';
      return (
        <div key={topic.topicName} className="topic-group">
          <div className='topic' onClick={this.handleClick} data-topic={topic.topicName}>
            <span className='ff-sans fw-bold'>{topic.topicName}</span>
          </div>
          <div className={`topic-detail ${hideTopic}`}>
            <p className='ff-sans fw-light'>
              {topic.topicText}
            </p>
          </div>
        </div>
      );
    });
  }

  handleClick(event) {
    if (this.state.openTopic !== event.currentTarget.dataset.topic) {
      this.setState({ openTopic: event.currentTarget.dataset.topic });
    } else {
      this.setState({ openTopic: null });
    }
  }

  render() {
    return (
      <div className="accordion-container">
        {this.generateTopics(this.props.topicsArray)}
      </div>
    );
  }
}
