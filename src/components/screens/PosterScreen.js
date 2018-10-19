import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Actions} from 'react-native-router-flux'

const PosterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
      PosterScreen
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  welcome: {
    fontSize:20,
    textAlign: 'center',
    margin: 10,
  }
})

export default PosterScreen
