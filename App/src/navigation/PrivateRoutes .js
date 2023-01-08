import * as React from "react";
import SettingsScreen from "../../screens/setting/SettingScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import SettingSvg from "../../assets/images/settingSvg";
import HomeSvg from "../../assets/images/homeSvg";
import ScannerSvg from "../../assets/images/scannerSvg";
import OrderSvg from "../../assets/images/orderSvg";
import ErrorSvg from "../../assets/images/errorSvg";
import OrderScreen from "../../screens/OrderScreen";
import ErrorListScreen from "../../screens/ErrorListjsx/ErrorListScreen";
import HomeScreen from "../../screens/home/HomeScreen";
import ScannerScreen from "../../screens/scanner/ScannerScreen";

const Tab = createBottomTabNavigator();

export const PrivateRoutes = () => (
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
        <Tab.Screen name="Scanner" component={ScannerScreen} />
    </Tab.Navigator>
);
