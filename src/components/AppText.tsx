import React from 'react';
import { StyleSheet,Text } from 'react-native';

// import { Container } from './styles';
export type Props = {
  text: string;
};
const AppText: React.FC<Props> = ({text}) => {
  return <>
    <Text style={styles.text}>{text}</Text>
  </>
}
 
const styles = StyleSheet.create({
  text:{
    color:'#AFAFAF',
  }

});

export default AppText;