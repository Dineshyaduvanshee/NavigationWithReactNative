import { Text, View, Button, TextInput } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./components/Login";
import { Register } from "./Register";
import { Home } from "./components/Home";


const Stack = createNativeStackNavigator();

const App = () => {
  const btnAction = () =>{
    console.warn("rifht Button pressed");
    
  }
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
            headerTitle:()=><Button title="right" onPress={btnAction}/>,
            headerRight:()=><Header/>,
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

const Header = () =>{
  return(
    <TextInput placeholder="name" style={{backgroundColor:'#fff'}}/>
  )
}

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
