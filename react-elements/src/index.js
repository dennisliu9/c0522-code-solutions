import React from 'react';
import ReactDOM from 'react-dom/client';

const rEl = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

console.log('My React Element: ', rEl);
console.log('My React Element type: ', typeof rEl);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(rEl);
