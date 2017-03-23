import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
// functional component
// const AlbumList = () => (
//     <View>
//       <Text>Album List!</Text>
//     </View>
//   );

// class based component
// more dynamic, can use helper methods, used for fetching
class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    // console.log('AlbumList will mount!');
    // start network request
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    debugger;
    return this.state.albums.map(album => <Text key={album.title}>{album.title}</Text>);
  }
  render() {
    console.log(this.state);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
