import React from "react";
import { Dimensions, Image, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FlashMessage from "react-native-flash-message";
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import AuthScreen from './Screens/LoginScreen';
import RegisterScreen from "./Screens/RegisterScreen";
import HomeScreen from "./Screens/HomeScreen";
import ControlCenterScreen from "./Screens/ControlCenterScreen";
import SettingsScreen from "./Screens/SettingsScreen";

const Stack = createNativeStackNavigator<StackParams>();
const Tab = createBottomTabNavigator<TabParams>();
const deviceWidth = Dimensions.get("window").width;

export type StackParams = {
  Auth: any,
  Register: any,
  Home: any,
}
export type TabParams = {
  name: any,
  HomePage: any,
  ControlCenter: any,
  Settings: any
}

export type routeParams = {
  token: String,
  name: String
}

function TabNavigator({ navigation, route }: any) {
  return (
    <Tab.Navigator initialRouteName="HomePage" screenOptions={
      ({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconUrl;
          if (route.name == "HomePage") {
            iconUrl = focused ? require("./Assets/home-selected.png") : require("./Assets/home.png")
          }
          else if (route.name == "ControlCenter") {
            iconUrl = focused ? require("./Assets/control-selected.png") : require("./Assets/control.png")
          }
          else if (route.name == "Settings") {
            iconUrl = focused ? require("./Assets/settings-selected.png") : require("./Assets/settings.png")
          }
          return <Image source={iconUrl} />;
        },
        tabBarStyle: {
          backgroundColor: "#C28B52",
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          marginTop: -20,
          height: deviceWidth / 6.9,

        },
        tabBarShowLabel: false,
      })


    }>
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
      <Tab.Screen name="ControlCenter" component={ControlCenterScreen}
        listeners={
          ({ route }) => (
            route.params === undefined ? { tabPress: e => e.preventDefault() } : { tabPress: e => e.defaultPrevented }
          )
        }
        options={
          ({ route }) => (
            route.params === undefined ? {
              title: "", headerStyle: {
                backgroundColor: "#C28B52",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontSize: 22,
              },
              headerTitleAlign: "center",
              headerLeft: () => {
                return (
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcon name="chevron-left" color={"white"} size={40} />
                  </TouchableOpacity>
                )
              }
            } : {
              title: route.params.name, headerStyle: {
                backgroundColor: "#C28B52",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontSize: 22,
              },
              headerTitleAlign: "center",
              headerLeft: () => {
                return (
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcon name="chevron-left" color={"white"} size={40} />
                  </TouchableOpacity>
                )
              }
            }

          )} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        title: "Ayarlar",
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
    </Tab.Navigator >
  );
}


export default function Router({ navigation, route }: any) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
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
