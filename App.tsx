import { StatusBar } from 'expo-status-bar';
import {} from 'react-native';
import {ThemeProvider} from 'styled-components/native'
import { useFonts, Overpass_400Regular, Overpass_600SemiBold, } from '@expo-google-fonts/overpass';

import dark from './src/themes/dark'
import Home from './src/screens/Home';


export default function App() {
  let [fontsLoaded] = useFonts({
    Overpass_400Regular,Overpass_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ThemeProvider theme={dark}>
    <Home/>
    </ThemeProvider>
  );
}
