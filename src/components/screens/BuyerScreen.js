import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Actions} from 'react-native-router-flux'
import DropdownMenu from 'react-native-dropdown-menu';

export default class BuyerScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'Please choose a location'
    };
  }

  render() {
    var data = [['Denver,CO', 'San Diego,CA']];
    return (
      <View style={styles.container}>
        <View style={{height: 64}} />
        <DropdownMenu
          style={{flex: 1, width:100 + '%'}}
          bgColor={'white'}
          activityTintColor={'green'}
          titleStyle={{color: '#333333'}}
          maxHeight={400}
          handler={(selection, row) => this.setState({text: data[selection][row]})}
          data={data}
        >
        <View style={{height: 64}} />
          <View style={{flex: 1}}>
            <Text
            style={styles.welcome}
            onPress={() => Actions.media(text = 'Denver,CO')}
            >
              {this.state.text}
            </Text>
          </View>

        </DropdownMenu>
      </View>
    );
  }
}

  const styles = StyleSheet.create({
    container: {
      width:100 + '%',
      flex: 1,
      justifyContent: "center",
      alignItems: 'center'
    },
    welcome: {
      fontSize:20,
      textAlign: 'center',
      margin: 15,
    }
  })
