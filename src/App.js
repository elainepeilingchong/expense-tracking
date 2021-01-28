// import 'react-native-gesture-handler'

import React from 'react';
import store from './common/reduxStore/index'
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigationRef } from './common/navigation/RootNavigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import LandingScreen from './screens/LandingScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const App: () => React$Node = () => {
  return (

    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Tab" component={LandingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );


};

export default App;


