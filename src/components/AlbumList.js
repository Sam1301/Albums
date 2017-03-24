import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

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
    console.log(this.state.albums);
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
  }
  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
