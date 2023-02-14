import React from "react";
import { Dimensions, Image, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FlashMessage from "react-native-flash-message";
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux'

import AuthScreen from './screens/LoginScreen';
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import ControlCenterScreen from "./screens/ControlCenterScreen";
import SettingsScreen from "./screens/SettingsScreen";
import UserProvider from "./context/Provider";
import DetailsScreen from "./screens/DetailsScreen";

const Stack = createNativeStackNavigator<StackParams>();
const Tab = createBottomTabNavigator<TabParams>();
const deviceWidth = Dimensions.get("window").width;

export type StackParams = {
  Auth: any,
  Register: any,
  Home: any,
  ControlStack: any,
  ControlCenter: any,
  Details: any
}
export type TabParams = {
  name: any,
  HomePage: any,
  ControlCenter: any,
  Settings: any
  ControlStack: any,
}

export type routeParams = {
  token: String,
  name: String
}

function ControlStack({ navigation }: any) {
  const name = useSelector((s: any) => s.gardenName);
  return (
    <Stack.Navigator>
      <Stack.Screen name="ControlCenter" component={ControlCenterScreen}
        options={
          ({
            title: name, headerStyle: {
              backgroundColor: "#C28B52",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontSize: 22,
            },
            headerTitleAlign: "center",
            headerLeft: () => {
              return (
                <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
                  <MaterialIcon name="chevron-left" color={"white"} size={40} />
                </TouchableOpacity>
              )
            }
          }

          )} />
      <Stack.Screen name="Details" component={DetailsScreen}

        options={{
          title: "Ayrıntılar", headerStyle: {
            backgroundColor: "#C28B52",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: 22,
          },
          headerTitleAlign: "center",
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate("ControlCenter")}>
                <MaterialIcon name="chevron-left" color={"white"} size={40} />
              </TouchableOpacity>
            )

          }

        }}

      />
    </Stack.Navigator >
  );
}

function TabNavigator() {
  return (

    <Tab.Navigator initialRouteName="HomePage" screenOptions={
      ({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconUrl;
          if (route.name == "HomePage") {
            iconUrl = focused ? require("./assets/home-selected.png") : require("./assets/home.png")
          }
          else if (route.name == "ControlStack") {
            iconUrl = focused ? require("./assets/control-selected.png") : require("./assets/control.png")
          }
          else if (route.name == "Settings") {
            iconUrl = focused ? require("./assets/settings-selected.png") : require("./assets/settings.png")
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
      <Tab.Screen name="ControlStack" component={ControlStack} options={{ headerShown: false }}
        listeners={
          ({ route }) => (
            route.params === undefined ? { tabPress: e => e.preventDefault() } : { tabPress: e => e.defaultPrevented }
          )
        }
      />
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


export default function Router() {
  return (
    <UserProvider>
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
    </UserProvider>
  );
}
