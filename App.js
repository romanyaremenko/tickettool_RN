import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from "./App/screens/setting/SettingScreen";
import ScannerScreen from "./App/screens/scanner/ScannerScreen";
import SettingSvg from "./App/assets/images/settingSvg";
import HomeSvg from "./App/assets/images/homeSvg";
import ScannerSvg from "./App/assets/images/scannerSvg";
import HomeScreen from "./App/screens/home/HomeScreen";
import OrderScreen from "./App/screens/OrderScreen";
import OrderSvg from "./App/assets/images/orderSvg";
import ErrorListScreen from "./App/screens/ErrorListjsx/ErrorListScreen";
import ErrorSvg from "./App/assets/images/errorSvg";



const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Tab.Navigator
              screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
                          if (route.name === 'Settings') {
                              if (focused) {
                                  return <SettingSvg color='tomato' />
                              }
                              else {
                                  return <SettingSvg />
                              }
                          }

                          else if(route.name === 'Home') {
                              if (focused) {
                                  return <HomeSvg color='tomato' />
                              }
                              else {
                                  return <HomeSvg />
                              }
                          }

                          else if(route.name === 'Scanner') {
                             if(focused) {
                                 return <ScannerSvg color='tomato' />
                             } else  {
                                 return <ScannerSvg />
                             }
                          }

                          else if(route.name === 'Orders') {
                              if (focused) {
                                  return <OrderSvg color='tomato' />
                              }
                              else {
                                  return <OrderSvg />
                              }
                          }

                          else if(route.name === 'Error') {
                              if (focused) {
                                  return <ErrorSvg color='tomato' />
                              }
                              else {
                                  return <ErrorSvg />
                              }
                          }
                  },
                  tabBarActiveTintColor: 'tomato',
                  tabBarInactiveTintColor: 'gray',
              })}
          >
          <Tab.Screen name="Orders" component={OrderScreen}  />
          <Tab.Screen name="Error" component={ErrorListScreen}  />
          <Tab.Screen name="Home" component={HomeScreen}  />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Scanner" component={ScannerScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
