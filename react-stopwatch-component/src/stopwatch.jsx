import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedSeconds: 0,
      isRunning: false,
      timerIntervalId: null
    };
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.resetTime = this.resetTime.bind(this);
  }

  handlePlayClick() {
    const newRunningStatus = !this.state.isRunning;
    let timerIntervalId = null;
    if (newRunningStatus) {
      timerIntervalId = this.startTimer();
    } else {
      clearInterval(this.state.timerIntervalId);
    }

    this.setState({
      isRunning: newRunningStatus,
      timerIntervalId
    });
  }

  startTimer() {
    const timerIntervalId = setInterval(() => {
      this.setState({ elapsedSeconds: this.state.elapsedSeconds + 1 });
    }, 1000);
    return timerIntervalId;
  }

  resetTime() {
    if (this.state.isRunning) {
      return;
    }
    this.setState(prevState => ({ elapsedSeconds: 0 }));
  }

  render() {
    const buttonClass = (this.state.isRunning) ? 'fa-pause' : 'fa-play';
    const disabled = (this.state.isRunning) ? 'disabled' : '';

    return (
      <div className='container'>
        <div className="row">
          <div className="col-full flex-col jc-center">
            <div className={'watchface flex-col jc-center ai-center ' + disabled} onClick={this.resetTime}>
              <span className='time-readout'>{this.state.elapsedSeconds}</span>
            </div>
          </div>
        </div>
        <div className="row mt-20">
          <div className="col-full">
            <div className="start-button text-center">
              <i className={'fa-solid ' + buttonClass} onClick={this.handlePlayClick}></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
