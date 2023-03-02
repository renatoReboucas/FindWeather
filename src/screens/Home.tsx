import React from 'react';
import { StyleSheet,View } from 'react-native';
import Text from '../components/AppText'

// import { Container } from './styles';

export default function Home(){
  return <View style={styles.container}>
    <Text text="Home"/>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:'#AFAFAF',
    backgroundColor: '#1B1D22',
    alignItems: 'center',
    justifyContent: 'center',
  },
});