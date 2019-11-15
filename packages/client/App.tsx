import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from "@mono/components";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button name={"Press Me 😀 😎 👍 💯"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
