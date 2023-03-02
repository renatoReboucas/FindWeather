import React from 'react';
import {} from 'react-native';
import {Title,Container, Logo} from '../components/AppText'

export default function Home(){
  
  return <> 
  <Container>
    <Logo source={require('../assets/cloud-and-thunder.png')} />
    <Title>Descubra o Clima na sua Cidade</Title>
  </Container>
  </>
}
