import React, {Component} from 'react'
import {FlatList} from 'react-native'
import {Post} from '../presentation'

class PostFeed extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://172.31.98.60:3000/users/' + this.props.loca)
      .then(response => response.json())
      .then(responseJson => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.users,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }


  _renderPost({item}){
    return <Post item={item}/>
  }

  _returnKey(item){
    return item.toString
  }

  render(){
    return <FlatList
      data={this.state.dataSource}
      keyExtractor={this._returnKey}
      renderItem={this._renderPost}
    />
  }
}

export default PostFeed
