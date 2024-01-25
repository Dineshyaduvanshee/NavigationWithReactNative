import { View,Text,Button } from "react-native";
export const Home = (props) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}> Home Screen</Text>
        <Button title="Go to Login" onPress={() => props.navigation.navigate("Login")} />
      </View>
    );
  };
  