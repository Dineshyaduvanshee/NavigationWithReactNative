import { View,Text,Button } from "react-native";
export const Register = (props) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}> Register Screen</Text>
        <Button title="Go to Login" onPress={() => props.navigation.navigate("Login")} />
      </View>
    );
  };