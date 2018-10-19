import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {Actions} from 'react-native-router-flux'
import config from '../../config'
import {PostFeed} from '../container'
import ProfileBar from '../presentation/ProfileBar'

export default class ListMediaScreen extends Component {

  constructor(props) {
    console.log(props);
    super(props);
  }
  render(){
    return (
      <View style={{ flex: 1, width:100 + '%', height:100+ '%'}}>
        <ProfileBar/>
        <PostFeed loca={"Denver,CO"}/>
      </View>
    )
  }
}
