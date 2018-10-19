import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import config from '../../config'

class Post extends Component {

constructor(){
  super()
  this.state = {
    screenWidth:  Math.floor(Dimensions.get("window").width),
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
    const imageUri = this.props.item.file

    const likedColor = (this.state.liked) ?  'rgb(252,61,57)': null

    return(
      <View>
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
        <View style={styles.textBar}>
        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems:'center', width: 50 + '%',}}>
        <Text style={{fontSize: 36}}>{this.props.item.location}</Text>
        </View>
        <View style={styles.payingBar}>
        <Text style={{fontSize: 36}}>10/15/18</Text>
        </View>
        </View>
        <View style={styles.interactionBar}>
          <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems:'center', width: 50 + '%',}}>
            <Image style={[styles.icon, {tintColor: likedColor}]} source={config.images.likeIcon}/>
            <Image style={styles.icon} source={config.images.msgIcon}/>
            <Image style={styles.icon} source={config.images.payIcon}/>
          </View>
          <View style={styles.payingBar}>
            <Text style={{fontSize: 36}}>${this.props.item.cost}</Text>
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
  interactionBar: {
    height: 50,
    width: 100 + '%',
    borderColor:'rgb(230,230,230)',
    borderBottomWidth:StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems:'center'
  },
  icon:{
    padding: 20,
    height: 50,
    width: 50,
  },
  textBar:{
    height: 50,
    width: 100 + '%',
    borderColor:'rgb(230,230,230)',
    borderTopWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems:'center'
  },
  payingBar: {
    width: 50 + '%',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center'
  }
})

export default Post
