import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar as StatusBarRN,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import WebView from "react-native-webview";
import { API_URL } from "../constants";
import { Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";

const ShopWebView = () => {
  const [loading, setLoading] = useState(true);
  const paddingTop =
    Platform.OS === "android" ? StatusBarRN.currentHeight || 0 : 0;

  if (!API_URL) {
    return <Redirect href={"/"} />;
  }

  const handleLoadStart = () => {
    setLoading(true);
  };

  const handleLoadEnd = () => {
    setLoading(false);
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1, paddingTop }}>
        <WebView
          style={[styles.container]}
          source={{ uri: API_URL }}
          userAgent="Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36"
          thirdPartyCookiesEnabled
          onLoadStart={handleLoadStart}
          onLoadEnd={handleLoadEnd}
        />
        {loading && (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="dodgerblue" />
          </View>
        )}
        <StatusBar style="dark" animated />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Optional pour un fond semi-transparent
  },
});

export default ShopWebView;
