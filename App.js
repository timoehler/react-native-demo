import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

export default class App extends React.Component {
  constructor () {
    super();
    this.receivedCoordinates = this.receivedCoordinates.bind(this);
    this.state = {
      position: null,
    };
  }

  componentDidMount () {
    this.getLocation();
  }

  getLocation () {
    const coords = navigator.geolocation.getCurrentPosition(this.receivedCoordinates);
  }

  receivedCoordinates (position) {
    this.setState({position});
  }

  render() {
    const { position } = this.state;
    const coords = position && position.coords;
    return (
      <View style={styles.container}>
        <Text>Latitude: {coords && coords.latitude}</Text>
        <Text>Longitude: {coords && coords.longitude}</Text>
        <Text>Altitude: {coords && coords.altitude}</Text>
        <Button title='refresh' onPress={() => this.getLocation()}>Refresh</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
