import { LogBox, StatusBar, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { fontsToImport } from 'globalStyles/fonts';
import { useFonts } from '@expo-google-fonts/montserrat';
import Register from 'pages/Register/Register';
import store from 'store/store';
import type { FC } from 'react';

const App: FC = () => {
  LogBox.ignoreAllLogs();

  const [fontsLoaded] = useFonts(fontsToImport);

  if (!fontsLoaded)
    return (
      <View>
        <Text>App is loading...</Text>
      </View>
    );

  return (
    <Provider store={store}>
      <StatusBar />
      <Register />
    </Provider>
  );
};

export default App;
