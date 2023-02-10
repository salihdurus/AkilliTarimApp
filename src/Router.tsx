import React from "react";
import {Dimensions} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FlashMessage from "react-native-flash-message";
import AuthScreen from './Screens/LoginScreen';
import RegisterScreen from "./Screens/RegisterScreen";
import HomeScreen from "./Screens/HomeScreen";
import ControlCenterScreen from "./Screens/ControlCenterScreen";

const Stack = createNativeStackNavigator<StackParams>();
const Tab = createBottomTabNavigator();
const deviceWidth=Dimensions.get("window").width;

export type StackParams = {
  Auth: any,
  Register: any,
  Home: any,
  ControlCenter: any,
}

function TabNavigator({ navigation, route }: any) {
  return (
    <Tab.Navigator initialRouteName="HomePage" screenOptions={{

      tabBarStyle: {
        backgroundColor: "#C28B52",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        marginTop:-20
      }
    }}>
      <Tab.Screen name="HomePage" component={HomeScreen} options={{
        title: "Anasayfa",
        headerStyle: {
          backgroundColor: "#C28B52",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontSize: 22,
        },
        headerTitleAlign: "center",
      }
      } />
      <Tab.Screen name="ControlCenter" component={ControlCenterScreen} options={
        ({ route }) => ({
          // title: (route.params!.name) ? route.params!.name : "asd",
          title: "asd",
          headerStyle: {
            backgroundColor: "#C28B52",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: 22,
          },
          headerTitleAlign: "center",
        })} />
    </Tab.Navigator>
  );
}

export default function Router({ navigation, route }: any) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />

        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />

        <Stack.Screen name="Home" component={TabNavigator} options={{
          headerShown: false
        }} />

      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}


{/* <Stack.Screen name="ControlCenter" component={ControlCenterScreen}
options={
  ({ route }) => ({
    title: route.params!.name,
    headerStyle: {
      backgroundColor: "#C28B52",
    },
    headerTintColor: "white",
    headerTitleStyle: {
      fontSize: 22,
    },
    headerTitleAlign: "center",
  })} */}
// options={[{

// headerStyle: {
//   backgroundColor: "#C28B52",
//   },
// headerTintColor: "white",
// headerTitleStyle: {
//   fontSize: 22,
//   },
// headerTitleAlign: "center",

// }]} 
// />

