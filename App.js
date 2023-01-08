import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './App/src/state/store';
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
import RootNavigator from "./App/src/navigation/RootNavigator";





export default function App() {
  return (
      <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
              <View style={{flex:1}}>
                    <RootNavigator/>
              </View>
          </PersistGate>
      </Provider>
  );
}
