// import 'react-native-gesture-handler'

import React from 'react';
import { store, persistor } from './common/reduxStore/index'
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './common/navigation/RootNavigation';
import LandingScreen from './screens/LandingScreen';
import { PersistGate } from 'redux-persist/integration/react';

const Stack = createStackNavigator();



const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Tab" component={LandingScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );


};

export default App;


