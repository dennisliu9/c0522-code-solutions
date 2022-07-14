import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };
    this.toggleToggle = this.toggleToggle.bind(this);
  }

  toggleToggle() {
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    const toggleStatus = (this.state.isOn) ? 'on' : 'off';
    return (
    <div className='toggle-container'>
      <div className={'toggle-background ' + toggleStatus}>
        <div className={'toggle-slider ' + toggleStatus} onClick={this.toggleToggle}></div>
      </div>
      <div className='toggle-label'>{toggleStatus.toUpperCase()}</div>
    </div>
    );
  }
}
