
import { StatusBar, View , SafeAreaView } from 'react-native';
import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';

import { useFonts , Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';



export default function App() {
  const [fontCarregada] = useFonts({
    "Montserrat_400Regular": Montserrat_400Regular,
    "Monstserrat_700Bold": Montserrat_700Bold,
  });

  if(!fontCarregada){
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex:1 }} >
      <StatusBar/>
      <Cesta {...mock} />
    </SafeAreaView>
  );
  
}
