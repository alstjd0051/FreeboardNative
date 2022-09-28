import { Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-red-100 h-full  `}>
      <Text style={[tw`text-red-500 p-10`]}>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
