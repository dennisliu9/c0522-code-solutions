import React from 'react';
import ReactDOM from 'react-dom/client';

// parent/wrapping component has an array of React Elements as children
class UnorderedList extends React.Component {
  render() {
    return (
    <ul>{this.props.listItems}</ul>
    );
  }
}

// child component has child text specified, but key is not from props so no need to specify
function ListItem(props) {
  return <li>{props.name}</li>;
}

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

// .map creates an array with each object in pokedex put into a ListItem component
// key is passed in here, but it is _not_ a prop
// key can only be passed here "when it gets made" and not "when it gets defined"
const myPokemon = pokedex.map(
  element => <ListItem key={element.number} name={element.name} />
);

const root = ReactDOM.createRoot(document.querySelector('#root'));
// UnorderedList's render() is expecting its props to have a property listItems with an array of React elements
root.render(<UnorderedList listItems={myPokemon} />);
