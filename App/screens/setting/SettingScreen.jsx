import {Button, Text, View} from "react-native";
import SettingSvg from "../../assets/images/settingSvg";
import {useNavigation} from "@react-navigation/native";

const SettingsScreen = () => {

    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
            <SettingSvg />
            <Button onPress={() => {
                console.log("12321312")
                navigation.navigate('Home')}}
                    title="Click Me" color="#841584" />
        </View>
    );

}
export default SettingsScreen
