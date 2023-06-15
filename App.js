import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Димоооон!!!</Text>
      <Button
        title="React JS"
        color="#841584"
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
