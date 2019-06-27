import React from 'react';
import Navbar from './containers/Navbar';
import { Grid } from 'semantic-ui-react';

import MainContainer from './containers/MainContainer';
import Sidebar from './containers/Sidebar';


class LandingPage extends React.Component {
  state = {
    // currentUser: 'josh',
    // signedIn: true,
    renderPair: 'kitchenIndex',
    // if kitchenIndex = kitchens index in sidebar and welcome message in MainContainer
    // if kitchenShow = kitchen show in sidebar and recipes in MainContainer
  }

  changeRenderPairToIndex = () => {
    // console.log('clicking');
    this.setState({
      renderPair: 'kitchenIndex'
    })
  }

  changeRenderPairToShow = () => {
    this.setState({
      renderPair: 'kitchenShow'
    })
  }


  render() {
    return (
      <React.Fragment>
        <Navbar
          user = {this.state.currentUser}
          changeRenderPairToIndex = {this.changeRenderPairToIndex}
          handleLogout = {this.props.handleLogout}
        />
        <Grid>
          <Grid.Row className="ui center aligned container">
            <Grid.Column width={5}>
              <Sidebar
                handleNewKitchen={this.props.handleNewKitchen}
                handleDeleteClick={this.props.handleDeleteClick}
                renderPair={this.state.renderPair}
                kitchens={this.props.kitchens}
                recipes={this.props.recipes}
                showKitchenDetails={this.props.showKitchenDetails}
                currentKitchenShow={this.props.currentKitchenShow}
                handleCookClick={this.props.handleCookClick}
              />
            </Grid.Column>
            <Grid.Column width={11}>
              <MainContainer
                handleAddClick={this.props.handleAddClick}
                renderPair={this.state.renderPair}
                kitchens={this.props.kitchens}
                recipes={this.props.recipes}
                currentKitchenShow={this.props.currentKitchenShow}
                changeRenderPair={this.changeRenderPairToShow}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default LandingPage;
