import React from 'react';
import MainNavigation from './src/components/navigation/MainNavigation';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
} from 'react-native';
const App = () => {
  const {height, width} = useWindowDimensions();
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#ED473E',
      accent: 'black',
      backgroundColor: 'black',
    },
  };
  return (
    <PaperProvider theme={theme}>
      <MainNavigation />
    </PaperProvider>
  );
};

export default App;
