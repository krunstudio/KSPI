import React, { Component } from 'react';
import { Image } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createReduxContainer } from 'react-navigation-redux-helpers';
import RootNavigator from './src/navigators/RootNavigator'
import  {store} from './src/redux/store';

import { Images, articles, argonTheme } from './constants';


const AppNav = createReduxContainer(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.router
});

const AppWithNavigationState = connect(mapStateToProps)(AppNav);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator/>
     </Provider>
    );
  }
}