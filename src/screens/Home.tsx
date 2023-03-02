import React from 'react';
import {} from 'react-native';
import {Title,Container,Logo, Description,Button,TextButton} from '../components/AppText'

export default function Home(){
  
  return <> 
  <Container>
    <Logo source={require('../assets/cloud-and-thunder.png')} />
    <Title>Descubra o Clima na sua Cidade</Title>
    <Description>Com o FindWeather nunca ficou tão fácil ter a previsão do tempo na palma da sua mão </Description>
    <Button>
      <TextButton>Iniciar</TextButton>
    </Button>
  </Container>
  </>
}
