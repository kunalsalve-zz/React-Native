import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}> Splash Screen </Text>
        </View>
        <View>
          <Text style={styles.subtitle}> Created by Quick4IT</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor:'#2ecc71',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  titleWrapper: {
    flex:1,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#000',
    fontWeight: '200',
    paddingBottom: 20,
  }
});
