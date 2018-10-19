import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import config from './config'
import {PostFeed} from './components/container'
import {Router, Scene} from 'react-native-router-flux'

import StartScreen from './components/screens/StartScreen'
import ListMediaScreen from './components/screens/ListMediaScreen'
import BuyerScreen from './components/screens/BuyerScreen'
import PosterScreen from './components/screens/PosterScreen'

class Crwlr extends Component {

  render(){

    return(
      <Router>
        <Scene key='root'>
          <Scene
            key='start'
            component={StartScreen}
            hideNavBar = {true}
            initial
          />
          <Scene
            key='media'
            component={ListMediaScreen}
            hideNavBar = {true}
          />
          <Scene
            key='buyer'
            component={BuyerScreen}
            hideNavBar = {true}
          />
          <Scene
            key='poster'
            component={PosterScreen}
            hideNavBar = {true}
          />
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({

});

export default Crwlr
