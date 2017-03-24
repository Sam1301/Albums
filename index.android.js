// import a library to help create a component
import React from 'react';
// ES6 import destructuring
import { AppRegistry, View } from 'react-native';

// import from a source (not a unique npm module).. don't need extension for js
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create a component
// native compoents like Text are provided by ReactNative
// Header nesting
const App = () => (
    <View style={{ flex: 1 }}>
      <Header text={'Albums'} />
      <AlbumList />
    </View>
  );

// render it to the device
// atleast register one component
// first param must match with project name
AppRegistry.registerComponent('albums', () => App);
