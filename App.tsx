import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ShoppingMarket from './src/components/ShoppingMarket';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ShoppingMarket />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
