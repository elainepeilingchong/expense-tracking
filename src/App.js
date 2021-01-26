// import 'react-native-gesture-handler'

import React from 'react';
import store from './common/reduxStore/index'
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigationRef } from './common/navigation/RootNavigation';
import FormScreen from './screens/FormScreen';
import CarouselScreen from './screens/CarouselScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Form') {
            iconName = focused
              ? 'wpforms'
              : 'wpforms';
          } else if (route.name === 'FormScreen1') {
            iconName = focused ? 'image' : 'image';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Form" component={FormScreen} />
      <Tab.Screen name="FormScreen1" component={FormScreen}  options={{ tabBarBadge: 3 }}/>
    </Tab.Navigator>
  );
}

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Carousel" component={CarouselScreen} />
    </Drawer.Navigator>
  );
}


const App: () => React$Node = () => {
  return (

    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Tab" component={TabNavigation} />
          <Stack.Screen name="Drawer" component={DrawerNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );


};

export default App;


