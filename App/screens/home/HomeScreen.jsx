import {Text, View} from "react-native";

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{fontWeight: "bold"}}>How app works:</Text>
            <Text>Go to your Superior Ticket backend and in the users list get your QR setting code</Text>
            <Text>Open setting tab in the app and scan setting QR code in order save your setting</Text>
            <Text>After your setting are saved you can start scan tickets</Text>
            <Text>Please remember that you can scan tickets only vai internet</Text>
        </View>
    );
}
export default HomeScreen
