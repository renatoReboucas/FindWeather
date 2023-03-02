import React from 'react';
import { StyleSheet,Text } from 'react-native';
import { useFonts, Overpass_400Regular } from '@expo-google-fonts/overpass';

// import { Container } from './styles';
export type Props = {
  text: string;
};
const AppText: React.FC<Props> = ({text}) => {
  let [fontsLoaded] = useFonts({
    Overpass_400Regular
  })
  if (!fontsLoaded) {
    return null;
  }
  return <>
    <Text style={styles.text}>{text}</Text>
  </>
}
 
const styles = StyleSheet.create({
  text:{
    color:'#AFAFAF',
    fontFamily: 'Overpass_400Regular'
  }

});

export default AppText;