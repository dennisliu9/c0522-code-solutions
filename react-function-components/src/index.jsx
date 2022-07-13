import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return <button>Click Me!</button>;
}

const $root = document.querySelector('#root');
const root = ReactDOM.createRoot($root);
const button = <CustomButton />;

root.render(button);
