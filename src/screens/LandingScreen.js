import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';

const Tab = createBottomTabNavigator();

class LandingScreen extends Component {

    constructor() {
        super()
        this.state = {
            firstVar: "It display using state"
        }

    }
    render() {
        return (
            <Tab.Navigator
                initialRouteName="Home"
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
                <Tab.Screen name="Profile" component={HomeScreen} />

                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Setting" component={HomeScreen} />

            </Tab.Navigator>
        );

    }

}
const mapStateToProps = state => {
    return {
      categories: state.general.categories,
      expenses: state.general.expenses,
    };
  };

  
export default connect(
    mapStateToProps,
    {
        retrieveCategories
    },
  )(LandingScreen);
  