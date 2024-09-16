import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Hello Minh</Text>
        <Text>Minh hihihi</Text>
      </View>
      <Text style={styles.helll1}> Hello world 1</Text>
      <Text>Hello world 2</Text>
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
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  helll1: {
    fontSize: 24,
    fontWeight: 'bold',
    borderWidth: 1,
  },
});
