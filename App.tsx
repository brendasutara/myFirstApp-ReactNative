import { SafeAreaView } from 'react-native';
import { HelloWorldScreen } from './src/presentation/screens/practica/HelloWorldScreen';
import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';

import IonIcon from 'react-native-vector-icons/Ionicons'
import { BoxObjectModelScreen } from './src/presentation/screens/practica/BoxObjectModelScreen';
import { DimensionScreen } from './src/presentation/screens/practica/DimensionScreen';
import { PositionScreen } from './src/presentation/screens/practica/PositionScreen';
import { FlexScreen } from './src/presentation/screens/practica/FlexScreen';
import { FlexDirectionScreen } from './src/presentation/screens/practica/FlexDirectionScreen';
import { HomeWork01Screen } from './src/presentation/screens/practica/HomeWork/HomeWork01Screen';
import { HomeWork02Screen } from './src/presentation/screens/practica/HomeWork/HomeWork02Screen';
import { HomeWork03Screen } from './src/presentation/screens/practica/HomeWork/HomeWork03Screen';
import { HomeWork04Screen } from './src/presentation/screens/practica/HomeWork/HomeWork04Screen';
import { HomeWork05Screen } from './src/presentation/screens/practica/HomeWork/HomeWork05Screen';
import { HomeWork06Screen } from './src/presentation/screens/practica/HomeWork/HomeWork06Screen';
import { HomeWork07Screen } from './src/presentation/screens/practica/HomeWork/HomeWork07Screen';
import { HomeWork08Screen } from './src/presentation/screens/practica/HomeWork/HomeWork08Screen';
import { HomeWork09Screen } from './src/presentation/screens/practica/HomeWork/HomeWork09Screen';
import { HomeWork10Screen } from './src/presentation/screens/practica/HomeWork/HomeWork10Screen';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWorldScreen name={'Brenda Eliana Sutara'} /> */}
        {/* <CounterScreen /> */}
        <CounterM3Screen />
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen /> */}
        {/* <PositionScreen /> */}
        {/* <FlexScreen /> */}
        {/* <FlexDirectionScreen /> */}
        {/* <HomeWork01Screen /> */}
        {/* <HomeWork02Screen /> */}
        {/* <HomeWork03Screen /> */}
        {/* <HomeWork04Screen /> */}
        {/* <HomeWork05Screen /> */}
        {/* <HomeWork06Screen /> */}
        {/* <HomeWork07Screen /> */}
        {/* <HomeWork08Screen /> */}
        {/* <HomeWork09Screen /> */}
        {/* <HomeWork10Screen /> */}
      </SafeAreaView>
    </PaperProvider>
  );
};
