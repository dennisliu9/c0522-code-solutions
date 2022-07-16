import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.state = {
      value: '',
      inputError: ''
    };
  }

  handlePasswordInput(event) {
    this.setState({ value: event.target.value });

    const regexSpecialChars = String.raw`.*(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()]).*`;
    if (event.target.value === '') {
      this.setState({
        inputError: 'A password is required.'
      });
    } else if (event.target.value.length < 8) {
      this.setState({
        inputError: 'Your password is too short'
      });
    } else if (!event.target.value.match(regexSpecialChars)) {
      this.setState({
        inputError: 'Your password needs at least one digit, one capital letter, and one special character.'
      });
    } else {
      this.setState({
        inputError: null
      });
    }
  }

  render() {
    const iconHidden = (this.state.inputError === '') ? 'invisible' : '';
    const statusIcon = (this.state.inputError) ? 'fa-xmark color-error' : 'fa-check color-success';

    return (
      <form>
        <div>
          <label htmlFor='password-input'>Password</label>
        </div>
        <input
          type="password"
          id='password-input'
          value={this.state.value}
          onChange={this.handlePasswordInput}>
        </input>
        <i className={`ml-10 fa-solid ${statusIcon} ${iconHidden}`}></i>
        <div className='error-message color-error'>
          <span className="error-text">{this.state.inputError}</span>
        </div>
      </form>
    );
  }
}
