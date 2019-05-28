import React from 'react';
import { Menu } from 'semantic-ui-react';

class Navbar extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    // const currentUser = this.props.user;

    return (
        <Menu>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>

          <Menu.Item
            name='kitchens'
            active={activeItem === 'kitchens'} onClick={this.handleItemClick}>
            Kitchens
          </Menu.Item>

          <Menu.Item
            name='recipes'
            active={activeItem === 'recipes'}
            onClick={this.handleItemClick}
          >
            Recipes
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
    )

  }
}

export default Navbar;
