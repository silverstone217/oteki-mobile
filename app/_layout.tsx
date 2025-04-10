import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { API_URL } from "../constants";
import { ActivityIndicator, View } from "react-native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

SplashScreen.preventAutoHideAsync();

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (API_URL) {
      setTimeout(() => {
        setLoading(false);
        SplashScreen.hideAsync();
      }, 3000);
    }
  }, []);

  if (loading || !API_URL) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={"dodgerblue"} />
      </View>
    );
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={API_URL ? "shop" : "index"}
    >
      {API_URL ? (
        <Stack.Screen name="shop" options={{ title: "Boutique" }} />
      ) : (
        <Stack.Screen name="index" options={{ title: "Accueil" }} />
      )}
    </Stack>
  );
};

export default MainLayout;
