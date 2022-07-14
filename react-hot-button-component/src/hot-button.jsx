import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfClicks: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      numberOfClicks: this.state.numberOfClicks + 1
    });
  }

  render() {
    let temp = '';
    if (this.state.numberOfClicks < 3) {
      temp = 'temp1';
    } else if (this.state.numberOfClicks < 6) {
      temp = 'temp2';
    } else if (this.state.numberOfClicks < 9) {
      temp = 'temp3';
    } else if (this.state.numberOfClicks < 12) {
      temp = 'temp4';
    } else if (this.state.numberOfClicks < 15) {
      temp = 'temp5';
    } else {
      temp = 'temp6';
    }

    return <button onClick={this.handleClick} className={temp}>Hot Button</button>;
  }
}
