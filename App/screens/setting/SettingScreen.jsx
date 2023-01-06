import {Text, View} from "react-native";
import SettingSvg from "../../assets/images/settingSvg";

const SettingsScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
            <SettingSvg />
        </View>
    );

}
export default SettingsScreen
