import { Text, View, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: 'blue' },
        headerTintColor: 'cyan',
        headerTitleStyle: {
          fontSize: 25
        }
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />

        <Stack.Screen name="Login" component={Login}
          options={{
            headerStyle: { backgroundColor: 'blue' },
            headerTintColor: 'orange',
            headerTitleStyle: {
              fontSize: 25
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Home = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}> Home Screen</Text>
      <Button title="Go to Login" onPress={() => props.navigation.navigate("Login")} />
    </View>
  );
};

const Register = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}> Register Screen</Text>
      <Button title="Go to Login" onPress={() => props.navigation.navigate("Login")} />
    </View>
  );
};

const Login = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}> Login Screen</Text>
      <Button title="Go to Register" onPress={() => props.navigation.navigate("Register")} />
    </View>
  );
};


export default App;



// import React from "react";
// import { Text, View, Button } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const Stack = createNativeStackNavigator();

// const HomeScreen = ({ navigation }) => (
//   <View style={}>
//     <Text>Home Screen</Text>
//     <Button
//       title="Go to Details"
//       onPress={() => navigation.navigate("Details")}
//     />
//   </View>
// );

// const DetailsScreen = () => (
//   <View>
//     <Text>Details Screen</Text>
//   </View>
// );

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
