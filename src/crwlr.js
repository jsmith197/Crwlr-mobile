import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import config from './config'

class Crwlr extends Component {

constructor(){
  super()
  this.state = {
    screenWidth: Dimensions.get("window").width,
    liked: false
  }
}

  likeToggled(){
    this.setState({
      liked: !this.state.liked
    })
  }

  render(){

    const imageHeight = Math.floor(this.state.screenWidth * 1.1 )
    const imageUri = "https://lh3.googleusercontent.com/FTtUoqTTbxI_6RMKFljCYIfczk_4TdfDHNHjbqYV-5i2wppT9GtTn5hPO74TmRNgDE4p6978cSYGjigNBYsWQmc2ng" +
    '=s' +
    imageHeight +
    "-c"
    const likedColor = (this.state.liked) ?  'rgb(252,61,57)': null

    return(
      <View style={{ flex: 1, width:100 + '%', height:100+ '%'}}>
        <View style={styles.tempNav}>
          <Text style={{fontSize: 30, alignItems:'center'}}>CRWLR</Text>
        </View>
        <View style={styles.profileBar}>
          <View style={{flexDirection:'row', width:50 + '%', alignItems:'center'}}>
            <Image
            style={styles.userPic}
            source={{uri: "https://lh3.googleusercontent.com/zwhIR6zhm4jR60Jp12DUcmaBCgzeDER_C2N-Z0pfmlgKQwo35K32pmjTsCOPXAm0jWvVqM6itKAzCeJI-8eM9vju"}}
            />
            <Text style={{marginLeft:10}}>username</Text>
          </View>
          <View style={{flexDirection:'row', paddingRight: 10}}>
            <Text style={{fontSize: 42}}>...</Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity = {.7}
          onPress={() => {
            this.likeToggled()
          }}
        >
          <Image
          style={{width:this.state.screenWidth, height:imageHeight}}
          source={{uri: imageUri}} />
        </TouchableOpacity>
        <View style={styles.interactionBar}>
          <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems:'center', width: 50 + '%',}}>
            <Image style={[styles.icon, {tintColor: likedColor}]} source={config.images.likeIcon}/>
            <Image style={styles.icon} source={config.images.msgIcon}/>
            <Image style={styles.icon} source={config.images.payIcon}/>
          </View>
          <View style={styles.payingBar}>
            <Text style={{fontSize: 36}}>$4.00</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tempNav:{
    width:100 + '%',
    height:50,
    borderTopWidth: 20,
    borderTopColor:'rgb(245,245,245)',
    backgroundColor:'rgb(245,245,245)',
    borderBottomColor:'rgb(230,230,230)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent:'center',
    alignItems:'center'
  },
  profileBar:{
    width:100 + '%',
    height:70,
    backgroundColor:'rgb(255,255,255)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor:'rgb(230,230,230)',
    borderBottomWidth:StyleSheet.hairlineWidth,
  },
  userPic: {
    height:40,
    width:40,
    borderRadius: 50,
    marginLeft: 5
  },
  interactionBar: {
    height: 50,
    width: 100 + '%',
    borderColor:'rgb(230,230,230)',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth:StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems:'center'
  },
  icon:{
    padding: 20,
    height: 50,
    width: 50,

  },
  payingBar: {
    width: 50 + '%',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center'
  }
})

export default Crwlr
