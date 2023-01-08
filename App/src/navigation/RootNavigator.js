import * as React from 'react';
import { Pressable, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SettingSvg from "../../assets/images/settingSvg";
import HomeSvg from "../../assets/images/homeSvg";
import ScannerSvg from "../../assets/images/scannerSvg";
import OrderSvg from "../../assets/images/orderSvg";
import ErrorSvg from "../../assets/images/errorSvg";
import OrderScreen from "../../screens/OrderScreen";
import ErrorListScreen from "../../screens/ErrorListjsx/ErrorListScreen";
import HomeScreen from "../../screens/home/HomeScreen";
import SettingsScreen from "../../screens/setting/SettingScreen";
import ScannerScreen from "../../screens/scanner/ScannerScreen";
import {PublicRoutes} from "./PublicRoutes";
import {PrivateRoutes} from "./PrivateRoutes ";
import {useState} from "react";




const RootNavigator = () => {
    const [IsLogined, setIsLogined] = useState(false);

    return  (
        <NavigationContainer>
            {IsLogined ?  <PrivateRoutes/> : <PublicRoutes/> }
        </NavigationContainer>
    )
}

export default RootNavigator
