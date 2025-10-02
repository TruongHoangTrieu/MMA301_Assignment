import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import HomeScreen from "../screens/homeScreen";
import FightScreen from "../screens/fightScreen";
import ProductScreen from "../screens/productScreen";
import CommunityScreen from "../screens/communityScreen";
import LoginScreen from "../screens/auth/loginScreen";
import RegisterScreen from "../screens/auth/registerScreen";
import FightOptionScreen from "../screens/fightOptionScreen";
import PokemonScreen from "../screens/pokemonScreen";
import DeckScreen from "../screens/deckScreen";
import DeckDetailScreen from "../screens/deckDetailScreen";
import Toast from "react-native-toast-message";
import CardCollectionScreen from "../screens/cardCollectionScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === "Home") iconName = "home";
        else if (route.name === "Fight") iconName = "flame";
        else if (route.name === "Product") iconName = "basket";
        else if (route.name === "Community") iconName = "people";
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Product" component={ProductScreen} />
    <Tab.Screen name="Community" component={CommunityScreen} />
    <Tab.Screen name="Fight" component={FightScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => {
  const Wrapper =
    Platform.OS === "android"
      ? ({ children }) => (
          <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
              {children}
            </SafeAreaView>
          </SafeAreaProvider>
        )
      : ({ children }) => <>{children}</>;
  return (
    <Wrapper>
      <StatusBar
        style={Platform.OS === "android" ? "auto" : "auto"}
        translucent={true}
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={MainTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FightOption"
            component={FightOptionScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Pokemon"
            component={PokemonScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Deck"
            component={DeckScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DeckDetail"
            component={DeckDetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CardCollection"
            component={CardCollectionScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </Wrapper>
  );
};

export { AppNavigator };
