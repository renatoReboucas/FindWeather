import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import Home from './src/screens/Home';


export default function App() {
  return (
    <Home/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:'#AFAFAF',
    backgroundColor: '#1B1D22',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'#AFAFAF',

  }
});
