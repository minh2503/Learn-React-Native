import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';


export default function App() {

  const [count, setCount] = useState<number>(0);


  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 60, fontWeight: "600" }}>Count = {count}</Text>
      <View>
        <Button color={"red"}
          title="Button" onPress={() => setCount(count + 1)} />
      </View>
      <Button title="Reset" onPress={() => setCount(0)} />
    </View>

  );
}


//css in js

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});