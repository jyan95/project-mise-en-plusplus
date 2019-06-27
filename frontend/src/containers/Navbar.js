import React from 'react';
import { Menu } from 'semantic-ui-react';

class Navbar extends React.Component {
  state = {}

  handleTabClick = (e, { name }) => this.setState({ activeItem: name })

  // handleKitchenClick = () => {
  //   this.props.changeRenderPairToIndex();
  // }

  render() {
    const { activeItem } = this.state;
    // const currentUser = this.props.user;

    return (
        <Menu>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={(e, name) => {this.handleTabClick(e, name); this.props.changeRenderPairToIndex()} }
          >
            Home
          </Menu.Item>


          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.props.handleLogout}
            />
          </Menu.Menu>
        </Menu>
    )
  }
}

export default Navbar;
