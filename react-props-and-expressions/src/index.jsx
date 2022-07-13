import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return <button>{props.text}</button>;
}

const $root = document.querySelector('#root');
const root = ReactDOM.createRoot($root);
root.render(
  <div>
    <CustomButton text="I" />
    <CustomButton text="know" />
    <CustomButton text="React!" />
  </div>
);
