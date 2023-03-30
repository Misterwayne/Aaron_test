import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class AssetExample extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop: -80}}>
          <Image source={require('../assets/logo.png')} />
        </View>
        <Text style={styles.paragraph}>Bienvenue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    paddingTop: 40,
    margin: 24,
    fontSize: 48,
    color: `#21D1AA`,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
