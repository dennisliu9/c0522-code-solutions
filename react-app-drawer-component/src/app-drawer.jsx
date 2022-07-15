import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const drawerVisibility = (this.state.isOpen) ? '' : 'closed';

    return (
      <div className="drawer-container">
        <div className={`drawer ${drawerVisibility}`}>
          <h4>Choose an Angel</h4>
          {generateLinkItems(
            ['Sachiel', 'Shamshel', 'Ramiel', 'Gaghiel', 'Israfel', 'Sandalphon', 'Matarael', 'Sahaquiel', 'Ireul', 'Leliel', 'Bardiel', 'Zeruel', 'Arael', 'Armisael', 'Tabris', 'Lilin'],
            this.toggleDrawer
          )}
        </div>
        <div className={`drawer-overlay ${drawerVisibility}`} onClick={this.toggleDrawer}></div>

        <div className="row">
          <div className="column-full">
            <i className="fa-solid fa-bars hamburger-button" onClick={this.toggleDrawer}></i>
          </div>
        </div>
      </div>
    );
  }
}

function LinkItem(props) {
  return <li><span onClick={props.clickHandler}>{props.text}</span></li>;
}

function generateLinkItems(textArr, clickHandler) {
  const liElements = [];
  for (let i = 0; i < textArr.length; i++) {
    liElements.push(<LinkItem clickHandler={clickHandler} key={i} text={textArr[i]} />);
  }
  return (<ul className="drawer-list">{liElements}</ul>);
}
